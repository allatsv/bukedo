import React, {useEffect, useMemo} from "react";
import {features, LOCATION} from './helpers'

function Map() {
  const [data, setData] = useState(); 
  const {
    YMap,

  } = useMemo(() => {
    if (data?.reactify) {
      return reactify.module(data.ymap);
    }
  }, [data]);

  useEffect(() => {
    const script = document.createElement('script');
    document.body.appendChild(script);
    script.type = "text/javascript";
    script.src = `https://api-maps.yandex.ru/v3/?apikey=${key}&lang=${lang}`;
    script.onload = async () => {
      const ymaps = window.ymaps3
      await ymaps.ready;
      const ymaps3Reactify = await ymaps.import('@yandex/ymaps3-reactify');
      const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);

      setData({
        reactify,
        ymaps
      });
      this.getData().geoObject.events.add(
        'mouseenter',
        () => {
          backgroundElement.style.top = `-${PIN_EXPANDED_INSET}px`;
          backgroundElement.style.bottom = `-${PIN_EXPANDED_INSET}px`;
          backgroundElement.style.left = `-${PIN_EXPANDED_INSET}px`;
          backgroundElement.style.right = `-${PIN_EXPANDED_INSET}px`;

          descriptionElement.style.transform = `translateY(-${PIN_EXPANDED_INSET}px)`;
          if (isDescriptionHidden) {
            descriptionElement.style.opacity = 1;
          }
        },
        this,
      );

      this.getData().geoObject.events.add(
        'mouseleave',
        () => {
          // if placemark is active leave hover layout unaffected
          if (!isActive) {
            backgroundElement.style.top = '0px';
            backgroundElement.style.bottom = '0px';
            backgroundElement.style.left = '0px';
            backgroundElement.style.right = '0px';

            descriptionElement.style.transform = 'translateY(0px)';
            if (isDescriptionHidden) {
              descriptionElement.style.opacity = 0;
            }
          }
        },
        this,
      );
    }
  }, [])
  
  if (!YMap) {
    return null;
  }
  <YMapComponentsProvider apiKey={process.env.REACT_APP_YMAP_KEY}>
  <YMap location={location}>
    <YMapDefaultSchemeLayer />
    <YMapDefaultFeaturesLayer />
    <YMapDefaultMarker
      coordinates={LOCATION.coordinates}
    />
  </YMap>
</YMapComponentsProvider>
  return (
    <YMap location={location}>
      <YMapDefaultSchemeLayer/>
      <YMapDefaultFeaturesLayer/>
      <YMapDefaultMarker
        coordinates={LOCATION.coordinates}
      />
    </YMap>
  );
}
