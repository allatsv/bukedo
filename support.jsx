use crate::reducer::*;
use alloc::boxed::Box;

impl<A, T> Reducer<A> for Box<T>
where
    T: Reducer<A> + ?Sized,
{
    fn reduce(&mut self, action: A) {
        (**self).reduce(action);
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use mockall::predicate::*;
    use test_strategy::proptest;

    #[proptest]
    fn reduce(action: u8) {
        let mut mock = MockReducer::new();

        mock.expect_reduce()
            .with(eq(action))
            .once()
            .return_const(());

        let mut reducer = Box::new(mock);
        Reducer::reduce(&mut reducer, action);
    }
}

class Compiler {

 static const MODE_COMPILE = 0;
 static const MODE_PARSE = 1;
 static const MODE_COMPLETE = 2;
 static const MODE_DOC = 3;

 var _platform : Platform;
 var _mode : number;
 var _transformCommands : TransformCommand[];
 var _optimizer : Optimizer;
 var _warningFilters : Array.<function(:CompileWarning):Nullable.<boolean>>;
 var _warningAsError : boolean;
 var _parsers : Parser[];
 var _fileCache : Map.<string>;
 var _searchPaths : string[];
 var _builtinParsers : Parser[];
 var _userEnvironment : Map.<string>;
 var _emitter : Emitter;

 function constructor (platform : Platform) {
  this._platform = platform;
  this._mode = Compiler.MODE_COMPILE;
  this._transformCommands = [] : Array.<TransformCommand>;
  this._optimizer = null;
  this._warningFilters = [] : Array.<function(:CompileWarning):Nullable.<boolean>>;
  this._warningAsError = false;
  this._parsers = new Parser[];
  this._fileCache = new Map.<string>;
  this._searchPaths = [ this._platform.getRoot() + "/lib/common" ];
  // load the built-in classes
  this.addSourceFile(null, this._platform.getRoot() + "/lib/built-in.jsx");
  this._builtinParsers = this._parsers.concat(new Parser[]); // shallow clone
  this._userEnvironment = new Map.<string>;
 }

 function addSearchPath (path : string) : void {
  this._searchPaths.unshift(path);
 }

 function getPlatform () : Platform {
  return this._platform;
 }

 function getMode () : number {
  return this._mode;
 }

 function setMode (mode : number) : Compiler {
  this._mode = mode;
  return this;
 }

 function getEmitter () : Emitter {
  return this._emitter;
 }

 function setEmitter (emitter : Emitter) : void {
  this._emitter = emitter;
 }

 function setTransformCommands(cmds : string[]) : Nullable.<string> {
  for (var i = 0; i < cmds.length; ++i) {
   var cmd = cmds[i];
   switch (cmd) {
   case "generator":
    this._transformCommands.push(new GeneratorTransformCommand(this)); break;
   case "cps":
    this._transformCommands.push(new CPSTransformCommand(this)); break;
   default:
    return "unknown transformation command: " + cmd;
   }
  }
  return null;
 }

 function setOptimizer (optimizer : Optimizer) : void {
  this._optimizer = optimizer;
 }

 function getWarningFilters () : Array.<function(:CompileWarning):Nullable.<boolean>> {
  return this._warningFilters;
 }

 function setWarningAsError(f : boolean) : void {
  this._warningAsError = f;
 }

 function getParsers () : Parser[] {
  return this._parsers;
 }

 function getBuiltinParsers () : Parser[] {
  return this._builtinParsers;
 }

 function getUserEnvironment() : Map.<string> {
  return this._userEnvironment;
 }

 function addSourceFile (token : Token, path : string) : Parser {
  return this.addSourceFile(token, path, null);
 }

 function addSourceFile (token : Token, path : string, completionRequest : CompletionRequest) : Parser {
  var parser;
  if ((parser = this.findParser(path)) == null) {
   parser = new Parser(token, path, completionRequest);
   this._parsers.push(parser);
  }
  return parser;
 }

 function findParser (path : string) : Parser {
  for (var i = 0; i < this._parsers.length; ++i)
   if (this._parsers[i].getPath() == path)
    return this._parsers[i];
  return null;
 }
