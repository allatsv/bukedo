export function createInvalidArgFactory(arg: unknown, name: string) {
    return (
      dispatch: Dispatch<Action<string>>,
      options: { readonly wrappedComponentName: string },
    ) => {
      throw new Error(
        `Invalid value of type ${typeof arg} for ${name} argument when connecting component ${
          options.wrappedComponentName
        }.`,
      )
    }
  }

  export function mapDispatchToPropsFactory<TDispatchProps, TOwnProps>(
    mapDispatchToProps:
      | MapDispatchToPropsParam<TDispatchProps, TOwnProps>
      | undefined,
  ) {
    return mapDispatchToProps && typeof mapDispatchToProps === 'object'
      ? wrapMapToPropsConstant((dispatch: Dispatch<Action<string>>) =>
       
          bindActionCreators(mapDispatchToProps, dispatch),
        )
      : !mapDispatchToProps
        ? wrapMapToPropsConstant((dispatch: Dispatch<Action<string>>) => ({
            dispatch,
          }))
        : typeof mapDispatchToProps === 'function'
 
            wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps')
          : createInvalidArgFactory(mapDispatchToProps, 'mapDispatchToProps')
  }


  export function mapStateToPropsFactory<TStateProps, TOwnProps, State>(
    mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>,
  ) {
    return !mapStateToProps
      ? wrapMapToPropsConstant(() => ({}))
      : typeof mapStateToProps === 'function'
        ? 
          wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps')
        : createInvalidArgFactory(mapStateToProps, 'mapStateToProps')
  }


  function defaultMergeProps<
  TStateProps,
  TDispatchProps,
  TOwnProps,
  TMergedProps,
>(
  stateProps: TStateProps,
  dispatchProps: TDispatchProps,
  ownProps: TOwnProps,
): TMergedProps {
  // @ts-ignore
  return { ...ownProps, ...stateProps, ...dispatchProps }
}

function wrapMergePropsFunc<
  TStateProps,
  TDispatchProps,
  TOwnProps,
  TMergedProps,
>(
  mergeProps: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>,
): (
  dispatch: Dispatch<Action<string>>,
  options: {
    readonly displayName: string
    readonly areMergedPropsEqual: EqualityFn<TMergedProps>
  },
) => MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps> {
  return function initMergePropsProxy(
    dispatch,
    { displayName, areMergedPropsEqual },
  ) {
    let hasRunOnce = false
    let mergedProps: TMergedProps

    return function mergePropsProxy(
      stateProps: TStateProps,
      dispatchProps: TDispatchProps,
      ownProps: TOwnProps,
    ) {
      const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps)

      if (hasRunOnce) {
        if (!areMergedPropsEqual(nextMergedProps, mergedProps))
          mergedProps = nextMergedProps
      } else {
        hasRunOnce = true
        mergedProps = nextMergedProps

        if (process.env.NODE_ENV !== 'production')
          verifyPlainObject(mergedProps, displayName, 'mergeProps')
      }

      return mergedProps
    }
  }
}

export function mergePropsFactory<
  TStateProps,
  TDispatchProps,
  TOwnProps,
  TMergedProps,
>(
  mergeProps?: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>,
) {
  return !mergeProps
    ? () => defaultMergeProps
    : typeof mergeProps === 'function'
      ? wrapMergePropsFunc(mergeProps)
      : createInvalidArgFactory(mergeProps, 'mergeProps')
}