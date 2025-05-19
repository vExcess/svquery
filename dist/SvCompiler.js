(() => {
  // node_modules/meriyah/dist/meriyah.min.mjs
  var e = { 0: "Unexpected token", 30: "Unexpected token: '%0'", 1: "Octal escape sequences are not allowed in strict mode", 2: "Octal escape sequences are not allowed in template strings", 3: "\\8 and \\9 are not allowed in template strings", 4: "Private identifier #%0 is not defined", 5: "Illegal Unicode escape sequence", 6: "Invalid code point %0", 7: "Invalid hexadecimal escape sequence", 9: "Octal literals are not allowed in strict mode", 8: "Decimal integer literals with a leading zero are forbidden in strict mode", 10: "Expected number in radix %0", 151: "Invalid left-hand side assignment to a destructible right-hand side", 11: "Non-number found after exponent indicator", 12: "Invalid BigIntLiteral", 13: "No identifiers allowed directly after numeric literal", 14: "Escapes \\8 or \\9 are not syntactically valid escapes", 15: "Escapes \\8 or \\9 are not allowed in strict mode", 16: "Unterminated string literal", 17: "Unterminated template literal", 18: "Multiline comment was not closed properly", 19: "The identifier contained dynamic unicode escape that was not closed", 20: "Illegal character '%0'", 21: "Missing hexadecimal digits", 22: "Invalid implicit octal", 23: "Invalid line break in string literal", 24: "Only unicode escapes are legal in identifier names", 25: "Expected '%0'", 26: "Invalid left-hand side in assignment", 27: "Invalid left-hand side in async arrow", 28: 'Calls to super must be in the "constructor" method of a class expression or class declaration that has a superclass', 29: "Member access on super must be in a method", 31: "Await expression not allowed in formal parameter", 32: "Yield expression not allowed in formal parameter", 95: "Unexpected token: 'escaped keyword'", 33: "Unary expressions as the left operand of an exponentiation expression must be disambiguated with parentheses", 123: "Async functions can only be declared at the top level or inside a block", 34: "Unterminated regular expression", 35: "Unexpected regular expression flag", 36: "Duplicate regular expression flag '%0'", 37: "%0 functions must have exactly %1 argument%2", 38: "Setter function argument must not be a rest parameter", 39: "%0 declaration must have a name in this context", 40: "Function name may not contain any reserved words or be eval or arguments in strict mode", 41: "The rest operator is missing an argument", 42: "A getter cannot be a generator", 43: "A setter cannot be a generator", 44: "A computed property name must be followed by a colon or paren", 134: "Object literal keys that are strings or numbers must be a method or have a colon", 46: "Found `* async x(){}` but this should be `async * x(){}`", 45: "Getters and setters can not be generators", 47: "'%0' can not be generator method", 48: "No line break is allowed after '=>'", 49: "The left-hand side of the arrow can only be destructed through assignment", 50: "The binding declaration is not destructible", 51: "Async arrow can not be followed by new expression", 52: "Classes may not have a static property named 'prototype'", 53: "Class constructor may not be a %0", 54: "Duplicate constructor method in class", 55: "Invalid increment/decrement operand", 56: "Invalid use of `new` keyword on an increment/decrement expression", 57: "`=>` is an invalid assignment target", 58: "Rest element may not have a trailing comma", 59: "Missing initializer in %0 declaration", 60: "'for-%0' loop head declarations can not have an initializer", 61: "Invalid left-hand side in for-%0 loop: Must have a single binding", 62: "Invalid shorthand property initializer", 63: "Property name __proto__ appears more than once in object literal", 64: "Let is disallowed as a lexically bound name", 65: "Invalid use of '%0' inside new expression", 66: "Illegal 'use strict' directive in function with non-simple parameter list", 67: 'Identifier "let" disallowed as left-hand side expression in strict mode', 68: "Illegal continue statement", 69: "Illegal break statement", 70: "Cannot have `let[...]` as a var name in strict mode", 71: "Invalid destructuring assignment target", 72: "Rest parameter may not have a default initializer", 73: "The rest argument must the be last parameter", 74: "Invalid rest argument", 76: "In strict mode code, functions can only be declared at top level or inside a block", 77: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement", 78: "Without web compatibility enabled functions can not be declared at top level, inside a block, or as the body of an if statement", 79: "Class declaration can't appear in single-statement context", 80: "Invalid left-hand side in for-%0", 81: "Invalid assignment in for-%0", 82: "for await (... of ...) is only valid in async functions and async generators", 83: "The first token after the template expression should be a continuation of the template", 85: "`let` declaration not allowed here and `let` cannot be a regular var name in strict mode", 84: "`let \n [` is a restricted production at the start of a statement", 86: "Catch clause requires exactly one parameter, not more (and no trailing comma)", 87: "Catch clause parameter does not support default values", 88: "Missing catch or finally after try", 89: "More than one default clause in switch statement", 90: "Illegal newline after throw", 91: "Strict mode code may not include a with statement", 92: "Illegal return statement", 93: "The left hand side of the for-header binding declaration is not destructible", 94: "new.target only allowed within functions or static blocks", 96: "'#' not followed by identifier", 102: "Invalid keyword", 101: "Can not use 'let' as a class name", 100: "'A lexical declaration can't define a 'let' binding", 99: "Can not use `let` as variable name in strict mode", 97: "'%0' may not be used as an identifier in this context", 98: "Await is only valid in async functions", 103: "The %0 keyword can only be used with the module goal", 104: "Unicode codepoint must not be greater than 0x10FFFF", 105: "%0 source must be string", 106: "Only a identifier or string can be used to indicate alias", 107: "Only '*' or '{...}' can be imported after default", 108: "Trailing decorator may be followed by method", 109: "Decorators can't be used with a constructor", 110: "Can not use `await` as identifier in module or async func", 111: "Can not use `await` as identifier in module", 112: "HTML comments are only allowed with web compatibility (Annex B)", 113: "The identifier 'let' must not be in expression position in strict mode", 114: "Cannot assign to `eval` and `arguments` in strict mode", 115: "The left-hand side of a for-of loop may not start with 'let'", 116: "Block body arrows can not be immediately invoked without a group", 117: "Block body arrows can not be immediately accessed without a group", 118: "Unexpected strict mode reserved word", 119: "Unexpected eval or arguments in strict mode", 120: "Decorators must not be followed by a semicolon", 121: "Calling delete on expression not allowed in strict mode", 122: "Pattern can not have a tail", 124: "Can not have a `yield` expression on the left side of a ternary", 125: "An arrow function can not have a postfix update operator", 126: "Invalid object literal key character after generator star", 127: "Private fields can not be deleted", 129: "Classes may not have a field called constructor", 128: "Classes may not have a private element named constructor", 130: "A class field initializer or static block may not contain arguments", 131: "Generators can only be declared at the top level or inside a block", 132: "Async methods are a restricted production and cannot have a newline following it", 133: "Unexpected character after object literal property name", 135: "Invalid key token", 136: "Label '%0' has already been declared", 137: "continue statement must be nested within an iteration statement", 138: "Undefined label '%0'", 139: "Trailing comma is disallowed inside import(...) arguments", 140: "Invalid binding in JSON import", 141: "import() requires exactly one argument", 142: "Cannot use new with import(...)", 143: "... is not allowed in import()", 144: "Expected '=>'", 145: "Duplicate binding '%0'", 146: "Duplicate private identifier #%0", 147: "Cannot export a duplicate name '%0'", 150: "Duplicate %0 for-binding", 148: "Exported binding '%0' needs to refer to a top-level declared variable", 149: "Unexpected private field", 153: "Numeric separators are not allowed at the end of numeric literals", 152: "Only one underscore is allowed as numeric separator", 154: "JSX value should be either an expression or a quoted JSX text", 155: "Expected corresponding JSX closing tag for %0", 156: "Adjacent JSX elements must be wrapped in an enclosing tag", 157: "JSX attributes must only be assigned a non-empty 'expression'", 158: "'%0' has already been declared", 159: "'%0' shadowed a catch clause binding", 160: "Dot property must be an identifier", 161: "Encountered invalid input after spread/rest argument", 162: "Catch without try", 163: "Finally without try", 164: "Expected corresponding closing tag for JSX fragment", 165: "Coalescing and logical operators used together in the same expression must be disambiguated with parentheses", 166: "Invalid tagged template on optional chain", 167: "Invalid optional chain from super property", 168: "Invalid optional chain from new expression", 169: 'Cannot use "import.meta" outside a module', 170: "Leading decorators must be attached to a class declaration", 171: "An export name cannot include a lone surrogate, found %0", 172: "A string literal cannot be used as an exported binding without `from`", 173: "Private fields can't be accessed on super", 174: "The only valid meta property for import is 'import.meta'", 175: "'import.meta' must not contain escaped characters", 176: 'cannot use "await" as identifier inside an async function', 177: 'cannot use "await" in static blocks' };
  var n = class extends SyntaxError {
    constructor(n2, t2, o2, r2, a2, i2, s2, ...l2) {
      const c2 = "[" + t2 + ":" + o2 + "-" + a2 + ":" + i2 + "]: " + e[s2].replace(/%(\d+)/g, (e2, n3) => l2[n3]);
      super(`${c2}`), this.start = n2, this.end = r2, this.range = [n2, r2], this.loc = { start: { line: t2, column: o2 }, end: { line: a2, column: i2 } }, this.description = c2;
    }
  };
  function t(e2, t2, ...o2) {
    throw new n(e2.tokenIndex, e2.tokenLine, e2.tokenColumn, e2.index, e2.line, e2.column, t2, ...o2);
  }
  function o(e2) {
    throw new n(e2.tokenIndex, e2.tokenLine, e2.tokenColumn, e2.index, e2.line, e2.column, e2.type, ...e2.params);
  }
  function r(e2, t2, o2, r2, a2, i2, s2, ...l2) {
    throw new n(e2, t2, o2, r2, a2, i2, s2, ...l2);
  }
  function a(e2, t2, o2, r2, a2, i2, s2) {
    throw new n(e2, t2, o2, r2, a2, i2, s2);
  }
  function i(e2) {
    return !!(1 & s[34816 + (e2 >>> 5)] >>> e2);
  }
  var s = ((e2, n2) => {
    const t2 = new Uint32Array(104448);
    let o2 = 0, r2 = 0;
    for (; o2 < 3822; ) {
      const a2 = e2[o2++];
      if (a2 < 0) r2 -= a2;
      else {
        let i2 = e2[o2++];
        2 & a2 && (i2 = n2[i2]), 1 & a2 ? t2.fill(i2, r2, r2 += e2[o2++]) : t2[r2++] = i2;
      }
    }
    return t2;
  })([-1, 2, 26, 2, 27, 2, 5, -1, 0, 77595648, 3, 44, 2, 3, 0, 14, 2, 63, 2, 64, 3, 0, 3, 0, 3168796671, 0, 4294956992, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966523, 3, 0, 4, 2, 16, 2, 65, 2, 0, 0, 4294836735, 0, 3221225471, 0, 4294901942, 2, 66, 0, 134152192, 3, 0, 2, 0, 4294951935, 3, 0, 2, 0, 2683305983, 0, 2684354047, 2, 18, 2, 0, 0, 4294961151, 3, 0, 2, 2, 19, 2, 0, 0, 608174079, 2, 0, 2, 60, 2, 7, 2, 6, 0, 4286611199, 3, 0, 2, 2, 1, 3, 0, 3, 0, 4294901711, 2, 40, 0, 4089839103, 0, 2961209759, 0, 1342439375, 0, 4294543342, 0, 3547201023, 0, 1577204103, 0, 4194240, 0, 4294688750, 2, 2, 0, 80831, 0, 4261478351, 0, 4294549486, 2, 2, 0, 2967484831, 0, 196559, 0, 3594373100, 0, 3288319768, 0, 8469959, 2, 203, 2, 3, 0, 4093640191, 0, 660618719, 0, 65487, 0, 4294828015, 0, 4092591615, 0, 1616920031, 0, 982991, 2, 3, 2, 0, 0, 2163244511, 0, 4227923919, 0, 4236247022, 2, 71, 0, 4284449919, 0, 851904, 2, 4, 2, 12, 0, 67076095, -1, 2, 72, 0, 1073741743, 0, 4093607775, -1, 0, 50331649, 0, 3265266687, 2, 33, 0, 4294844415, 0, 4278190047, 2, 20, 2, 137, -1, 3, 0, 2, 2, 23, 2, 0, 2, 10, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 74, 2, 0, 2, 75, 2, 76, 2, 77, 2, 0, 2, 78, 2, 0, 2, 11, 0, 261632, 2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 79, 2, 5, 3, 0, 2, 2, 80, 0, 2151677951, 2, 29, 2, 9, 0, 909311, 3, 0, 2, 0, 814743551, 2, 49, 0, 67090432, 3, 0, 2, 2, 42, 2, 0, 2, 6, 2, 0, 2, 30, 2, 8, 0, 268374015, 2, 110, 2, 51, 2, 0, 2, 81, 0, 134153215, -1, 2, 7, 2, 0, 2, 8, 0, 2684354559, 0, 67044351, 0, 3221160064, 2, 17, -1, 3, 0, 2, 2, 53, 0, 1046528, 3, 0, 3, 2, 9, 2, 0, 2, 54, 0, 4294960127, 2, 10, 2, 6, 2, 11, 0, 4294377472, 2, 12, 3, 0, 16, 2, 13, 2, 0, 2, 82, 2, 10, 2, 0, 2, 83, 2, 84, 2, 85, 2, 210, 2, 55, 0, 1048577, 2, 86, 2, 14, -1, 2, 14, 0, 131042, 2, 87, 2, 88, 2, 89, 2, 0, 2, 34, -83, 3, 0, 7, 0, 1046559, 2, 0, 2, 15, 2, 0, 0, 2147516671, 2, 21, 3, 90, 2, 2, 0, -16, 2, 91, 0, 524222462, 2, 4, 2, 0, 0, 4269801471, 2, 4, 3, 0, 2, 2, 28, 2, 16, 3, 0, 2, 2, 17, 2, 0, -1, 2, 18, -16, 3, 0, 206, -2, 3, 0, 692, 2, 73, -1, 2, 18, 2, 10, 3, 0, 8, 2, 93, 2, 133, 2, 0, 0, 3220242431, 3, 0, 3, 2, 19, 2, 94, 2, 95, 3, 0, 2, 2, 96, 2, 0, 2, 97, 2, 46, 2, 0, 0, 4351, 2, 0, 2, 9, 3, 0, 2, 0, 67043391, 0, 3909091327, 2, 0, 2, 24, 2, 9, 2, 20, 3, 0, 2, 0, 67076097, 2, 8, 2, 0, 2, 21, 0, 67059711, 0, 4236247039, 3, 0, 2, 0, 939524103, 0, 8191999, 2, 101, 2, 102, 2, 22, 2, 23, 3, 0, 3, 0, 67057663, 3, 0, 349, 2, 103, 2, 104, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 3774349439, 2, 105, 2, 106, 3, 0, 2, 2, 19, 2, 107, 3, 0, 10, 2, 10, 2, 18, 2, 0, 2, 47, 2, 0, 2, 31, 2, 108, 2, 25, 0, 1638399, 2, 183, 2, 109, 3, 0, 3, 2, 20, 2, 26, 2, 27, 2, 5, 2, 28, 2, 0, 2, 8, 2, 111, -1, 2, 112, 2, 113, 2, 114, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -3, 2, 163, -4, 2, 20, 2, 0, 2, 36, 0, 1, 2, 0, 2, 67, 2, 6, 2, 12, 2, 10, 2, 0, 2, 115, -1, 3, 0, 4, 2, 10, 2, 23, 2, 116, 2, 7, 2, 0, 2, 117, 2, 0, 2, 118, 2, 119, 2, 120, 2, 0, 2, 9, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 121, 2, 122, -2, 2, 123, 2, 124, 2, 30, 2, 21, 2, 8, -2, 2, 125, 2, 30, 2, 32, -2, 2, 0, 2, 39, -2, 0, 4277137519, 0, 2269118463, -1, 3, 20, 2, -1, 2, 33, 2, 38, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 48, 2, 0, 0, 4294950463, 2, 37, -7, 2, 0, 0, 203775, 2, 57, 2, 167, 2, 20, 2, 43, 2, 36, 2, 18, 2, 37, 2, 18, 2, 126, 2, 21, 3, 0, 2, 2, 38, 0, 2151677888, 2, 0, 2, 12, 0, 4294901764, 2, 144, 2, 0, 2, 58, 2, 56, 0, 5242879, 3, 0, 2, 0, 402644511, -1, 2, 128, 2, 39, 0, 3, -1, 2, 129, 2, 130, 2, 0, 0, 67045375, 2, 40, 0, 4226678271, 0, 3766565279, 0, 2039759, 2, 132, 2, 41, 0, 1046437, 0, 6, 3, 0, 2, 0, 3288270847, 0, 3, 3, 0, 2, 0, 67043519, -5, 2, 0, 0, 4282384383, 0, 1056964609, -1, 3, 0, 2, 0, 67043345, -1, 2, 0, 2, 42, 2, 23, 2, 50, 2, 11, 2, 61, 2, 38, -5, 2, 0, 2, 12, -3, 3, 0, 2, 0, 2147484671, 2, 134, 0, 4190109695, 2, 52, -2, 2, 135, 0, 4244635647, 0, 27, 2, 0, 2, 8, 2, 43, 2, 0, 2, 68, 2, 18, 2, 0, 2, 42, -6, 2, 0, 2, 45, 2, 59, 2, 44, 2, 45, 2, 46, 2, 47, 0, 8388351, -2, 2, 136, 0, 3028287487, 2, 48, 2, 138, 0, 33259519, 2, 49, -9, 2, 21, 0, 4294836223, 0, 3355443199, 0, 134152199, -2, 2, 69, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 17, 3, 0, 6, 2, 50, -81, 2, 18, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 2, 30, 3, 0, 124, 2, 12, 3, 0, 18, 2, 38, -213, 2, 0, 2, 32, -54, 3, 0, 17, 2, 42, 2, 8, 2, 23, 2, 0, 2, 8, 2, 23, 2, 51, 2, 0, 2, 21, 2, 52, 2, 139, 2, 25, -13, 2, 0, 2, 53, -6, 3, 0, 2, -4, 3, 0, 2, 0, 4294936575, 2, 0, 0, 4294934783, -2, 0, 196635, 3, 0, 191, 2, 54, 3, 0, 38, 2, 30, 2, 55, 2, 34, -278, 2, 140, 3, 0, 9, 2, 141, 2, 142, 2, 56, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 143, 0, 1677656575, -130, 2, 26, -16, 2, 0, 2, 24, 2, 38, -16, 0, 4161266656, 0, 4071, 2, 205, -4, 2, 57, -13, 3, 0, 2, 2, 58, 2, 0, 2, 145, 2, 146, 2, 62, 2, 0, 2, 147, 2, 148, 2, 149, 3, 0, 10, 2, 150, 2, 151, 2, 22, 3, 58, 2, 3, 152, 2, 3, 59, 2, 0, 4294954999, 2, 0, -16, 2, 0, 2, 92, 2, 0, 0, 2105343, 0, 4160749584, 2, 177, -34, 2, 8, 2, 154, -6, 0, 4194303871, 0, 4294903771, 2, 0, 2, 60, 2, 100, -3, 2, 0, 0, 1073684479, 0, 17407, -9, 2, 18, 2, 17, 2, 0, 2, 32, -14, 2, 18, 2, 32, -6, 2, 18, 2, 12, -15, 2, 155, 3, 0, 6, 0, 8323103, -1, 3, 0, 2, 2, 61, -37, 2, 62, 2, 156, 2, 157, 2, 158, 2, 159, 2, 160, -105, 2, 26, -32, 3, 0, 1335, -1, 3, 0, 129, 2, 32, 3, 0, 6, 2, 10, 3, 0, 180, 2, 161, 3, 0, 233, 2, 162, 3, 0, 18, 2, 10, -77, 3, 0, 16, 2, 10, -47, 3, 0, 154, 2, 6, 3, 0, 130, 2, 25, -22250, 3, 0, 7, 2, 25, -6130, 3, 5, 2, -1, 0, 69207040, 3, 44, 2, 3, 0, 14, 2, 63, 2, 64, -3, 0, 3168731136, 0, 4294956864, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966275, 3, 0, 4, 2, 16, 2, 65, 2, 0, 2, 34, -1, 2, 18, 2, 66, -1, 2, 0, 0, 2047, 0, 4294885376, 3, 0, 2, 0, 3145727, 0, 2617294944, 0, 4294770688, 2, 25, 2, 67, 3, 0, 2, 0, 131135, 2, 98, 0, 70256639, 0, 71303167, 0, 272, 2, 42, 2, 6, 0, 32511, 2, 0, 2, 49, -1, 2, 99, 2, 68, 0, 4278255616, 0, 4294836227, 0, 4294549473, 0, 600178175, 0, 2952806400, 0, 268632067, 0, 4294543328, 0, 57540095, 0, 1577058304, 0, 1835008, 0, 4294688736, 2, 70, 2, 69, 0, 33554435, 2, 131, 2, 70, 2, 164, 0, 131075, 0, 3594373096, 0, 67094296, 2, 69, -1, 0, 4294828e3, 0, 603979263, 0, 654311424, 0, 3, 0, 4294828001, 0, 602930687, 2, 171, 0, 393219, 0, 4294828016, 0, 671088639, 0, 2154840064, 0, 4227858435, 0, 4236247008, 2, 71, 2, 38, -1, 2, 4, 0, 917503, 2, 38, -1, 2, 72, 0, 537788335, 0, 4026531935, -1, 0, 1, -1, 2, 33, 2, 73, 0, 7936, -3, 2, 0, 0, 2147485695, 0, 1010761728, 0, 4292984930, 0, 16387, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 74, 2, 0, 2, 75, 2, 76, 2, 77, 2, 0, 2, 78, 2, 0, 2, 12, -1, 2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 79, 2, 5, 3, 0, 2, 2, 80, 0, 2147745791, 3, 19, 2, 0, 122879, 2, 0, 2, 9, 0, 276824064, -2, 3, 0, 2, 2, 42, 2, 0, 0, 4294903295, 2, 0, 2, 30, 2, 8, -1, 2, 18, 2, 51, 2, 0, 2, 81, 2, 49, -1, 2, 21, 2, 0, 2, 29, -2, 0, 128, -2, 2, 28, 2, 9, 0, 8160, -1, 2, 127, 0, 4227907585, 2, 0, 2, 37, 2, 0, 2, 50, 2, 184, 2, 10, 2, 6, 2, 11, -1, 0, 74440192, 3, 0, 6, -2, 3, 0, 8, 2, 13, 2, 0, 2, 82, 2, 10, 2, 0, 2, 83, 2, 84, 2, 85, -3, 2, 86, 2, 14, -3, 2, 87, 2, 88, 2, 89, 2, 0, 2, 34, -83, 3, 0, 7, 0, 817183, 2, 0, 2, 15, 2, 0, 0, 33023, 2, 21, 3, 90, 2, -17, 2, 91, 0, 524157950, 2, 4, 2, 0, 2, 92, 2, 4, 2, 0, 2, 22, 2, 28, 2, 16, 3, 0, 2, 2, 17, 2, 0, -1, 2, 18, -16, 3, 0, 206, -2, 3, 0, 692, 2, 73, -1, 2, 18, 2, 10, 3, 0, 8, 2, 93, 0, 3072, 2, 0, 0, 2147516415, 2, 10, 3, 0, 2, 2, 25, 2, 94, 2, 95, 3, 0, 2, 2, 96, 2, 0, 2, 97, 2, 46, 0, 4294965179, 0, 7, 2, 0, 2, 9, 2, 95, 2, 9, -1, 0, 1761345536, 2, 98, 0, 4294901823, 2, 38, 2, 20, 2, 99, 2, 35, 2, 100, 0, 2080440287, 2, 0, 2, 34, 2, 153, 0, 3296722943, 2, 0, 0, 1046675455, 0, 939524101, 0, 1837055, 2, 101, 2, 102, 2, 22, 2, 23, 3, 0, 3, 0, 7, 3, 0, 349, 2, 103, 2, 104, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 2700607615, 2, 105, 2, 106, 3, 0, 2, 2, 19, 2, 107, 3, 0, 10, 2, 10, 2, 18, 2, 0, 2, 47, 2, 0, 2, 31, 2, 108, -3, 2, 109, 3, 0, 3, 2, 20, -1, 3, 5, 2, 2, 110, 2, 0, 2, 8, 2, 111, -1, 2, 112, 2, 113, 2, 114, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -8, 2, 20, 2, 0, 2, 36, -1, 2, 0, 2, 67, 2, 6, 2, 30, 2, 10, 2, 0, 2, 115, -1, 3, 0, 4, 2, 10, 2, 18, 2, 116, 2, 7, 2, 0, 2, 117, 2, 0, 2, 118, 2, 119, 2, 120, 2, 0, 2, 9, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 121, 2, 122, -2, 2, 123, 2, 124, 2, 30, 2, 21, 2, 8, -2, 2, 125, 2, 30, 2, 32, -2, 2, 0, 2, 39, -2, 0, 4277075969, 2, 30, -1, 3, 20, 2, -1, 2, 33, 2, 126, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 50, 2, 98, 0, 4294934591, 2, 37, -7, 2, 0, 0, 197631, 2, 57, -1, 2, 20, 2, 43, 2, 37, 2, 18, 0, 3, 2, 18, 2, 126, 2, 21, 2, 127, 2, 54, -1, 0, 2490368, 2, 127, 2, 25, 2, 18, 2, 34, 2, 127, 2, 38, 0, 4294901904, 0, 4718591, 2, 127, 2, 35, 0, 335544350, -1, 2, 128, 0, 2147487743, 0, 1, -1, 2, 129, 2, 130, 2, 8, -1, 2, 131, 2, 70, 0, 3758161920, 0, 3, 2, 132, 0, 12582911, 0, 655360, -1, 2, 0, 2, 29, 0, 2147485568, 0, 3, 2, 0, 2, 25, 0, 176, -5, 2, 0, 2, 17, 2, 192, -1, 2, 0, 2, 25, 2, 209, -1, 2, 0, 0, 16779263, -2, 2, 12, -1, 2, 38, -5, 2, 0, 2, 133, -3, 3, 0, 2, 2, 55, 2, 134, 0, 2147549183, 0, 2, -2, 2, 135, 2, 36, 0, 10, 0, 4294965249, 0, 67633151, 0, 4026597376, 2, 0, 0, 536871935, 2, 18, 2, 0, 2, 42, -6, 2, 0, 0, 1, 2, 59, 2, 17, 0, 1, 2, 46, 2, 25, -3, 2, 136, 2, 36, 2, 137, 2, 138, 0, 16778239, -10, 2, 35, 0, 4294836212, 2, 9, -3, 2, 69, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 17, 3, 0, 6, 2, 50, -81, 2, 18, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 0, 126, 3, 0, 124, 2, 12, 3, 0, 18, 2, 38, -213, 2, 10, -55, 3, 0, 17, 2, 42, 2, 8, 2, 18, 2, 0, 2, 8, 2, 18, 2, 60, 2, 0, 2, 25, 2, 50, 2, 139, 2, 25, -13, 2, 0, 2, 73, -6, 3, 0, 2, -4, 3, 0, 2, 0, 67583, -1, 2, 107, -2, 0, 11, 3, 0, 191, 2, 54, 3, 0, 38, 2, 30, 2, 55, 2, 34, -278, 2, 140, 3, 0, 9, 2, 141, 2, 142, 2, 56, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 143, 2, 144, -187, 3, 0, 2, 2, 58, 2, 0, 2, 145, 2, 146, 2, 62, 2, 0, 2, 147, 2, 148, 2, 149, 3, 0, 10, 2, 150, 2, 151, 2, 22, 3, 58, 2, 3, 152, 2, 3, 59, 2, 2, 153, -57, 2, 8, 2, 154, -7, 2, 18, 2, 0, 2, 60, -4, 2, 0, 0, 1065361407, 0, 16384, -9, 2, 18, 2, 60, 2, 0, 2, 133, -14, 2, 18, 2, 133, -6, 2, 18, 0, 81919, -15, 2, 155, 3, 0, 6, 2, 126, -1, 3, 0, 2, 0, 2063, -37, 2, 62, 2, 156, 2, 157, 2, 158, 2, 159, 2, 160, -138, 3, 0, 1335, -1, 3, 0, 129, 2, 32, 3, 0, 6, 2, 10, 3, 0, 180, 2, 161, 3, 0, 233, 2, 162, 3, 0, 18, 2, 10, -77, 3, 0, 16, 2, 10, -47, 3, 0, 154, 2, 6, 3, 0, 130, 2, 25, -28386, 2, 0, 0, 1, -1, 2, 55, 2, 0, 0, 8193, -21, 2, 201, 0, 10255, 0, 4, -11, 2, 69, 2, 182, -1, 0, 71680, -1, 2, 174, 0, 4292900864, 0, 268435519, -5, 2, 163, -1, 2, 173, -1, 0, 6144, -2, 2, 46, -1, 2, 168, -1, 0, 2147532800, 2, 164, 2, 170, 0, 8355840, -2, 0, 4, -4, 2, 198, 0, 205128192, 0, 1333757536, 0, 2147483696, 0, 423953, 0, 747766272, 0, 2717763192, 0, 4286578751, 0, 278545, 2, 165, 0, 4294886464, 0, 33292336, 0, 417809, 2, 165, 0, 1327482464, 0, 4278190128, 0, 700594195, 0, 1006647527, 0, 4286497336, 0, 4160749631, 2, 166, 0, 201327104, 0, 3634348576, 0, 8323120, 2, 166, 0, 202375680, 0, 2678047264, 0, 4293984304, 2, 166, -1, 0, 983584, 0, 48, 0, 58720273, 0, 3489923072, 0, 10517376, 0, 4293066815, 0, 1, 2, 213, 2, 167, 2, 0, 0, 2089, 0, 3221225552, 0, 201359520, 2, 0, -2, 0, 256, 0, 122880, 0, 16777216, 2, 163, 0, 4160757760, 2, 0, -6, 2, 179, -11, 0, 3263218176, -1, 0, 49664, 0, 2160197632, 0, 8388802, -1, 0, 12713984, -1, 2, 168, 2, 186, 2, 187, -2, 2, 175, -20, 0, 3758096385, -2, 2, 169, 2, 195, 2, 94, 2, 180, 0, 4294057984, -2, 2, 176, 2, 172, 0, 4227874816, -2, 2, 169, -1, 2, 170, -1, 2, 181, 2, 55, 0, 4026593280, 0, 14, 0, 4292919296, -1, 2, 178, 0, 939588608, -1, 0, 805306368, -1, 2, 55, 2, 171, 2, 172, 2, 173, 2, 211, 2, 0, -2, 0, 8192, -4, 0, 267386880, -1, 0, 117440512, 0, 7168, -1, 2, 170, 2, 168, 2, 174, 2, 188, -16, 2, 175, -1, 0, 1426112704, 2, 176, -1, 2, 196, 0, 271581216, 0, 2149777408, 2, 25, 2, 174, 2, 55, 0, 851967, 2, 189, -1, 2, 177, 2, 190, -4, 2, 178, -20, 2, 98, 2, 208, -56, 0, 3145728, 2, 191, -10, 0, 32505856, -1, 2, 179, -1, 0, 2147385088, 2, 94, 1, 2155905152, 2, -3, 2, 176, 2, 0, 0, 67108864, -2, 2, 180, -6, 2, 181, 2, 25, 0, 1, -1, 0, 1, -1, 2, 182, -3, 2, 126, 2, 69, -2, 2, 100, -2, 0, 32704, 2, 55, -915, 2, 183, -1, 2, 207, -10, 2, 194, -5, 2, 185, -6, 0, 3759456256, 2, 19, -1, 2, 184, -1, 2, 185, -2, 0, 4227874752, -3, 0, 2146435072, 2, 186, -2, 0, 1006649344, 2, 55, -1, 2, 94, 0, 201375744, -3, 0, 134217720, 2, 94, 0, 4286677377, 0, 32896, -1, 2, 178, -3, 0, 4227907584, -349, 0, 65520, 0, 1920, 2, 167, 3, 0, 264, -11, 2, 173, -2, 2, 187, 2, 0, 0, 520617856, 0, 2692743168, 0, 36, -3, 0, 524280, -13, 2, 193, -1, 0, 4294934272, 2, 25, 2, 187, -1, 2, 215, 0, 2158720, -3, 2, 186, 0, 1, -4, 2, 55, 0, 3808625411, 0, 3489628288, 0, 4096, 0, 1207959680, 0, 3221274624, 2, 0, -3, 2, 188, 0, 120, 0, 7340032, -2, 2, 189, 2, 4, 2, 25, 2, 176, 3, 0, 4, 2, 186, -1, 2, 190, 2, 167, -1, 0, 8176, 2, 170, 2, 188, 0, 1073741824, -1, 0, 4290773232, 2, 0, -4, 2, 176, 2, 197, 0, 15728640, 2, 167, -1, 2, 174, -1, 0, 134250480, 0, 4720640, 0, 3825467396, -1, 2, 180, -9, 2, 94, 2, 181, 0, 4294967040, 2, 137, 0, 4160880640, 3, 0, 2, 0, 704, 0, 1849688064, 2, 191, -1, 2, 55, 0, 4294901887, 2, 0, 0, 130547712, 0, 1879048192, 2, 212, 3, 0, 2, -1, 2, 192, 2, 193, -1, 0, 17829776, 0, 2025848832, 0, 4261477888, -2, 2, 0, -1, 0, 4286580608, -1, 0, 29360128, 2, 200, 0, 16252928, 0, 3791388672, 2, 130, 3, 0, 2, -2, 2, 206, 2, 0, -1, 2, 107, -1, 0, 66584576, -1, 2, 199, -1, 0, 448, 0, 4294918080, 3, 0, 6, 2, 55, -1, 0, 4294755328, 0, 4294967267, 2, 7, -1, 2, 174, 2, 187, 2, 25, 2, 98, 2, 25, 2, 194, 2, 94, -2, 0, 245760, 2, 195, -1, 2, 163, 2, 202, 0, 4227923456, -1, 2, 196, 2, 174, 2, 94, -3, 0, 4292870145, 0, 262144, -1, 2, 95, 2, 0, 0, 1073758848, 2, 197, -1, 0, 4227921920, 2, 198, 0, 68289024, 0, 528402016, 0, 4292927536, 0, 46080, 2, 191, 0, 4265609306, 0, 4294967289, -2, 0, 268435456, 2, 95, -2, 2, 199, 3, 0, 5, -1, 2, 200, 2, 176, 2, 0, -2, 0, 4227923936, 2, 67, -1, 2, 187, 2, 197, 2, 99, 2, 168, 2, 178, 2, 204, 3, 0, 5, -1, 2, 167, 3, 0, 3, -2, 0, 2146959360, 0, 9440640, 0, 104857600, 0, 4227923840, 3, 0, 2, 0, 768, 2, 201, 2, 28, -2, 2, 174, -2, 2, 202, -1, 2, 169, 2, 98, 3, 0, 5, -1, 0, 4227923964, 0, 512, 0, 8388608, 2, 203, 2, 183, 2, 193, 0, 4286578944, 3, 0, 2, 0, 1152, 0, 1266679808, 2, 199, 0, 576, 0, 4261707776, 2, 98, 3, 0, 9, 2, 169, 0, 131072, 0, 939524096, 2, 188, 3, 0, 2, 2, 16, -1, 0, 2147221504, -28, 2, 187, 3, 0, 3, -3, 0, 4292902912, -6, 2, 99, 3, 0, 81, 2, 25, -2, 2, 107, -33, 2, 18, 2, 181, -124, 2, 188, -18, 2, 204, 3, 0, 213, -1, 2, 187, 3, 0, 54, -17, 2, 169, 2, 55, 2, 205, -1, 2, 55, 2, 197, 0, 4290822144, -2, 0, 67174336, 0, 520093700, 2, 18, 3, 0, 13, -1, 2, 187, 3, 0, 6, -2, 2, 188, 3, 0, 3, -2, 0, 30720, -1, 0, 32512, 3, 0, 2, 0, 4294770656, -191, 2, 185, -38, 2, 181, 2, 8, 2, 206, 3, 0, 278, 0, 2417033215, -9, 0, 4294705144, 0, 4292411391, 0, 65295, -11, 2, 167, 3, 0, 72, -3, 0, 3758159872, 0, 201391616, 3, 0, 123, -7, 2, 187, -13, 2, 180, 3, 0, 2, -1, 2, 173, 2, 207, -3, 2, 99, 2, 0, -7, 2, 181, -1, 0, 384, -1, 0, 133693440, -3, 2, 208, -2, 2, 110, 3, 0, 3, 3, 180, 2, -2, 2, 94, 2, 169, 3, 0, 4, -2, 2, 196, -1, 2, 163, 0, 335552923, 2, 209, -1, 0, 538974272, 0, 2214592512, 0, 132e3, -10, 0, 192, -8, 2, 210, -21, 0, 134213632, 2, 162, 3, 0, 34, 2, 55, 0, 4294965279, 3, 0, 6, 0, 100663424, 0, 63524, -1, 2, 214, 2, 152, 3, 0, 3, -1, 0, 3221282816, 0, 4294917120, 3, 0, 9, 2, 25, 2, 211, -1, 2, 212, 3, 0, 14, 2, 25, 2, 187, 3, 0, 6, 2, 25, 2, 213, 3, 0, 15, 0, 2147520640, -6, 0, 4286578784, 2, 0, -2, 0, 1006694400, 3, 0, 24, 2, 36, -1, 0, 4292870144, 3, 0, 2, 0, 1, 2, 176, 3, 0, 6, 2, 209, 0, 4110942569, 0, 1432950139, 0, 2701658217, 0, 4026532864, 0, 4026532881, 2, 0, 2, 47, 3, 0, 8, -1, 2, 178, -2, 2, 180, 0, 98304, 0, 65537, 2, 181, -5, 2, 214, 2, 0, 2, 37, 2, 202, 2, 167, 0, 4294770176, 2, 110, 3, 0, 4, -30, 2, 192, 0, 3758153728, -3, 0, 125829120, -2, 2, 187, 0, 4294897664, 2, 178, -1, 2, 199, -1, 2, 174, 0, 4026580992, 2, 95, 2, 0, -10, 2, 180, 0, 3758145536, 0, 31744, -1, 0, 1610628992, 0, 4261477376, -4, 2, 215, -2, 2, 187, 3, 0, 32, -1335, 2, 0, -129, 2, 187, -6, 2, 176, -180, 0, 65532, -233, 2, 177, -18, 2, 176, 3, 0, 77, -16, 2, 176, 3, 0, 47, -154, 2, 170, -130, 2, 18, 3, 0, 22250, -7, 2, 18, 3, 0, 6128], [4294967295, 4294967291, 4092460543, 4294828031, 4294967294, 134217726, 4294903807, 268435455, 2147483647, 1048575, 1073741823, 3892314111, 134217727, 1061158911, 536805376, 4294910143, 4294901759, 32767, 4294901760, 262143, 536870911, 8388607, 4160749567, 4294902783, 4294918143, 65535, 67043328, 2281701374, 4294967264, 2097151, 4194303, 255, 67108863, 4294967039, 511, 524287, 131071, 63, 127, 3238002687, 4294549487, 4290772991, 33554431, 4294901888, 4286578687, 67043329, 4294705152, 4294770687, 67043583, 1023, 15, 2047999, 67043343, 67051519, 16777215, 2147483648, 4294902e3, 28, 4292870143, 4294966783, 16383, 67047423, 4294967279, 262083, 20511, 41943039, 493567, 4294959104, 603979775, 65536, 602799615, 805044223, 4294965206, 8191, 1031749119, 4294917631, 2134769663, 4286578493, 4282253311, 4294942719, 33540095, 4294905855, 2868854591, 1608515583, 265232348, 534519807, 2147614720, 1060109444, 4093640016, 17376, 2139062143, 224, 4169138175, 4294909951, 4286578688, 4294967292, 4294965759, 535511039, 4294966272, 4294967280, 32768, 8289918, 4294934399, 4294901775, 4294965375, 1602223615, 4294967259, 4294443008, 268369920, 4292804608, 4294967232, 486341884, 4294963199, 3087007615, 1073692671, 4128527, 4279238655, 4294902015, 4160684047, 4290246655, 469499899, 4294967231, 134086655, 4294966591, 2445279231, 3670015, 31, 4294967288, 4294705151, 3221208447, 4294902271, 4294549472, 4294921215, 4095, 4285526655, 4294966527, 4294966143, 64, 4294966719, 3774873592, 1877934080, 262151, 2555904, 536807423, 67043839, 3758096383, 3959414372, 3755993023, 2080374783, 4294835295, 4294967103, 4160749565, 4294934527, 4087, 2016, 2147446655, 184024726, 2862017156, 1593309078, 268434431, 268434414, 4294901763, 4294901761, 536870912, 2952790016, 202506752, 139264, 4026531840, 402653184, 4261412864, 63488, 1610612736, 4227922944, 49152, 65280, 3233808384, 3221225472, 65534, 61440, 57152, 4293918720, 4290772992, 25165824, 57344, 4227915776, 4278190080, 3758096384, 4227858432, 4160749568, 3758129152, 4294836224, 4194304, 251658240, 196608, 4294963200, 2143289344, 2097152, 64512, 417808, 4227923712, 12582912, 50331648, 65528, 65472, 4294967168, 15360, 4294966784, 65408, 4294965248, 16, 12288, 4294934528, 2080374784, 2013265920, 4294950912, 524288]);
  function l(e2) {
    return e2.column++, e2.currentChar = e2.source.charCodeAt(++e2.index);
  }
  function c(e2) {
    const n2 = e2.currentChar;
    if (55296 != (64512 & n2)) return 0;
    const t2 = e2.source.charCodeAt(e2.index + 1);
    return 56320 != (64512 & t2) ? 0 : 65536 + ((1023 & n2) << 10) + (1023 & t2);
  }
  function u(e2, n2) {
    e2.currentChar = e2.source.charCodeAt(++e2.index), e2.flags |= 1, 4 & n2 || (e2.column = 0, e2.line++);
  }
  function d(e2) {
    e2.flags |= 1, e2.currentChar = e2.source.charCodeAt(++e2.index), e2.column = 0, e2.line++;
  }
  function g(e2) {
    return e2 < 65 ? e2 - 48 : e2 - 65 + 10 & 15;
  }
  function k(e2) {
    switch (e2) {
      case 134283266:
        return "NumericLiteral";
      case 134283267:
        return "StringLiteral";
      case 86021:
      case 86022:
        return "BooleanLiteral";
      case 86023:
        return "NullLiteral";
      case 65540:
        return "RegularExpression";
      case 67174408:
      case 67174409:
      case 131:
        return "TemplateLiteral";
      default:
        return 143360 & ~e2 ? 4096 & ~e2 ? "Punctuator" : "Keyword" : "Identifier";
    }
  }
  var p = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1032, 0, 0, 2056, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8192, 0, 3, 0, 0, 8192, 0, 0, 0, 256, 0, 33024, 0, 0, 242, 242, 114, 114, 114, 114, 114, 114, 594, 594, 0, 0, 16384, 0, 0, 0, 0, 67, 67, 67, 67, 67, 67, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 0, 0, 4099, 0, 71, 71, 71, 71, 71, 71, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 16384, 0, 0, 0, 0];
  var f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
  var m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
  function b(e2) {
    return e2 <= 127 ? f[e2] > 0 : i(e2);
  }
  function h(e2) {
    return e2 <= 127 ? m[e2] > 0 : function(e3) {
      return !!(1 & s[0 + (e3 >>> 5)] >>> e3);
    }(e2) || 8204 === e2 || 8205 === e2;
  }
  var x = ["SingleLine", "MultiLine", "HTMLOpen", "HTMLClose", "HashbangComment"];
  function T(e2, n2, o2, r2, a2, i2, s2, l2) {
    return 512 & r2 && t(e2, 0), y(e2, n2, o2, a2, i2, s2, l2);
  }
  function y(e2, n2, t2, o2, r2, a2, i2) {
    const { index: s2 } = e2;
    for (e2.tokenIndex = e2.index, e2.tokenLine = e2.line, e2.tokenColumn = e2.column; e2.index < e2.end; ) {
      if (8 & p[e2.currentChar]) {
        const t3 = 13 === e2.currentChar;
        d(e2), t3 && e2.index < e2.end && 10 === e2.currentChar && (e2.currentChar = n2.charCodeAt(++e2.index));
        break;
      }
      if ((8232 ^ e2.currentChar) <= 1) {
        d(e2);
        break;
      }
      l(e2), e2.tokenIndex = e2.index, e2.tokenLine = e2.line, e2.tokenColumn = e2.column;
    }
    if (e2.onComment) {
      const t3 = { start: { line: a2, column: i2 }, end: { line: e2.tokenLine, column: e2.tokenColumn } };
      e2.onComment(x[255 & o2], n2.slice(s2, e2.tokenIndex), r2, e2.tokenIndex, t3);
    }
    return 1 | t2;
  }
  function C(e2, n2, o2) {
    const { index: r2 } = e2;
    for (; e2.index < e2.end; ) if (e2.currentChar < 43) {
      let t2 = false;
      for (; 42 === e2.currentChar; ) if (t2 || (o2 &= -5, t2 = true), 47 === l(e2)) {
        if (l(e2), e2.onComment) {
          const t3 = { start: { line: e2.tokenLine, column: e2.tokenColumn }, end: { line: e2.line, column: e2.column } };
          e2.onComment(x[1], n2.slice(r2, e2.index - 2), r2 - 2, e2.index, t3);
        }
        return e2.tokenIndex = e2.index, e2.tokenLine = e2.line, e2.tokenColumn = e2.column, o2;
      }
      if (t2) continue;
      8 & p[e2.currentChar] ? 13 === e2.currentChar ? (o2 |= 5, d(e2)) : (u(e2, o2), o2 = -5 & o2 | 1) : l(e2);
    } else (8232 ^ e2.currentChar) <= 1 ? (o2 = -5 & o2 | 1, d(e2)) : (o2 &= -5, l(e2));
    t(e2, 18);
  }
  var v;
  var w;
  function L(e2, n2) {
    const o2 = e2.index;
    let r2 = v.Empty;
    e: for (; ; ) {
      const n3 = e2.currentChar;
      if (l(e2), r2 & v.Escape) r2 &= ~v.Escape;
      else switch (n3) {
        case 47:
          if (r2) break;
          break e;
        case 92:
          r2 |= v.Escape;
          break;
        case 91:
          r2 |= v.Class;
          break;
        case 93:
          r2 &= v.Escape;
      }
      if (13 !== n3 && 10 !== n3 && 8232 !== n3 && 8233 !== n3 || t(e2, 34), e2.index >= e2.source.length) return t(e2, 34);
    }
    const a2 = e2.index - 1;
    let i2 = w.Empty, s2 = e2.currentChar;
    const { index: c2 } = e2;
    for (; h(s2); ) {
      switch (s2) {
        case 103:
          i2 & w.Global && t(e2, 36, "g"), i2 |= w.Global;
          break;
        case 105:
          i2 & w.IgnoreCase && t(e2, 36, "i"), i2 |= w.IgnoreCase;
          break;
        case 109:
          i2 & w.Multiline && t(e2, 36, "m"), i2 |= w.Multiline;
          break;
        case 117:
          i2 & w.Unicode && t(e2, 36, "u"), i2 & w.UnicodeSets && t(e2, 36, "vu"), i2 |= w.Unicode;
          break;
        case 118:
          i2 & w.Unicode && t(e2, 36, "uv"), i2 & w.UnicodeSets && t(e2, 36, "v"), i2 |= w.UnicodeSets;
          break;
        case 121:
          i2 & w.Sticky && t(e2, 36, "y"), i2 |= w.Sticky;
          break;
        case 115:
          i2 & w.DotAll && t(e2, 36, "s"), i2 |= w.DotAll;
          break;
        case 100:
          i2 & w.Indices && t(e2, 36, "d"), i2 |= w.Indices;
          break;
        default:
          t(e2, 35);
      }
      s2 = l(e2);
    }
    const u2 = e2.source.slice(c2, e2.index), d2 = e2.source.slice(o2, a2);
    return e2.tokenRegExp = { pattern: d2, flags: u2 }, 128 & n2 && (e2.tokenRaw = e2.source.slice(e2.tokenIndex, e2.index)), e2.tokenValue = function(e3, n3, o3) {
      try {
        return new RegExp(n3, o3);
      } catch {
        try {
          return new RegExp(n3, o3), null;
        } catch {
          t(e3, 34);
        }
      }
    }(e2, d2, u2), 65540;
  }
  function I(e2, n2, o2) {
    const { index: r2 } = e2;
    let a2 = "", i2 = l(e2), s2 = e2.index;
    for (; !(8 & p[i2]); ) {
      if (i2 === o2) return a2 += e2.source.slice(s2, e2.index), l(e2), 128 & n2 && (e2.tokenRaw = e2.source.slice(r2, e2.index)), e2.tokenValue = a2, 134283267;
      if (!(8 & ~i2) && 92 === i2) {
        if (a2 += e2.source.slice(s2, e2.index), i2 = l(e2), i2 < 127 || 8232 === i2 || 8233 === i2) {
          const t2 = q(e2, n2, i2);
          t2 >= 0 ? a2 += String.fromCodePoint(t2) : E(e2, t2, 0);
        } else a2 += String.fromCodePoint(i2);
        s2 = e2.index + 1;
      }
      e2.index >= e2.end && t(e2, 16), i2 = l(e2);
    }
    t(e2, 16);
  }
  function q(e2, n2, t2, o2 = 0) {
    switch (t2) {
      case 98:
        return 8;
      case 102:
        return 12;
      case 114:
        return 13;
      case 110:
        return 10;
      case 116:
        return 9;
      case 118:
        return 11;
      case 13:
        if (e2.index < e2.end) {
          const n3 = e2.source.charCodeAt(e2.index + 1);
          10 === n3 && (e2.index = e2.index + 1, e2.currentChar = n3);
        }
      case 10:
      case 8232:
      case 8233:
        return e2.column = -1, e2.line++, -1;
      case 48:
      case 49:
      case 50:
      case 51: {
        let r2 = t2 - 48, a2 = e2.index + 1, i2 = e2.column + 1;
        if (a2 < e2.end) {
          const t3 = e2.source.charCodeAt(a2);
          if (32 & p[t3]) {
            if (256 & n2 || o2) return -2;
            if (e2.currentChar = t3, r2 = r2 << 3 | t3 - 48, a2++, i2++, a2 < e2.end) {
              const n3 = e2.source.charCodeAt(a2);
              32 & p[n3] && (e2.currentChar = n3, r2 = r2 << 3 | n3 - 48, a2++, i2++);
            }
            e2.flags |= 64;
          } else if (0 !== r2 || 512 & p[t3]) {
            if (256 & n2 || o2) return -2;
            e2.flags |= 64;
          }
          e2.index = a2 - 1, e2.column = i2 - 1;
        }
        return r2;
      }
      case 52:
      case 53:
      case 54:
      case 55: {
        if (o2 || 256 & n2) return -2;
        let r2 = t2 - 48;
        const a2 = e2.index + 1, i2 = e2.column + 1;
        if (a2 < e2.end) {
          const n3 = e2.source.charCodeAt(a2);
          32 & p[n3] && (r2 = r2 << 3 | n3 - 48, e2.currentChar = n3, e2.index = a2, e2.column = i2);
        }
        return e2.flags |= 64, r2;
      }
      case 120: {
        const n3 = l(e2);
        if (!(64 & p[n3])) return -4;
        const t3 = g(n3), o3 = l(e2);
        if (!(64 & p[o3])) return -4;
        return t3 << 4 | g(o3);
      }
      case 117: {
        const n3 = l(e2);
        if (123 === e2.currentChar) {
          let n4 = 0;
          for (; 64 & p[l(e2)]; ) if (n4 = n4 << 4 | g(e2.currentChar), n4 > 1114111) return -5;
          return e2.currentChar < 1 || 125 !== e2.currentChar ? -4 : n4;
        }
        {
          if (!(64 & p[n3])) return -4;
          const t3 = e2.source.charCodeAt(e2.index + 1);
          if (!(64 & p[t3])) return -4;
          const o3 = e2.source.charCodeAt(e2.index + 2);
          if (!(64 & p[o3])) return -4;
          const r2 = e2.source.charCodeAt(e2.index + 3);
          return 64 & p[r2] ? (e2.index += 3, e2.column += 3, e2.currentChar = e2.source.charCodeAt(e2.index), g(n3) << 12 | g(t3) << 8 | g(o3) << 4 | g(r2)) : -4;
        }
      }
      case 56:
      case 57:
        if (o2 || !(64 & n2) || 256 & n2) return -3;
        e2.flags |= 4096;
      default:
        return t2;
    }
  }
  function E(e2, n2, o2) {
    switch (n2) {
      case -1:
        return;
      case -2:
        t(e2, o2 ? 2 : 1);
      case -3:
        t(e2, o2 ? 3 : 14);
      case -4:
        t(e2, 7);
      case -5:
        t(e2, 104);
    }
  }
  function S(e2, n2) {
    const { index: o2 } = e2;
    let r2 = 67174409, a2 = "", i2 = l(e2);
    for (; 96 !== i2; ) {
      if (36 === i2 && 123 === e2.source.charCodeAt(e2.index + 1)) {
        l(e2), r2 = 67174408;
        break;
      }
      if (92 === i2) if (i2 = l(e2), i2 > 126) a2 += String.fromCodePoint(i2);
      else {
        const { index: t2, line: o3, column: s2 } = e2, l2 = q(e2, 256 | n2, i2, 1);
        if (l2 >= 0) a2 += String.fromCodePoint(l2);
        else {
          if (-1 !== l2 && 16384 & n2) {
            e2.index = t2, e2.line = o3, e2.column = s2, a2 = null, i2 = A(e2, i2), i2 < 0 && (r2 = 67174408);
            break;
          }
          E(e2, l2, 1);
        }
      }
      else e2.index < e2.end && (13 === i2 && 10 === e2.source.charCodeAt(e2.index) && (a2 += String.fromCodePoint(i2), e2.currentChar = e2.source.charCodeAt(++e2.index)), ((83 & i2) < 3 && 10 === i2 || (8232 ^ i2) <= 1) && (e2.column = -1, e2.line++), a2 += String.fromCodePoint(i2));
      e2.index >= e2.end && t(e2, 17), i2 = l(e2);
    }
    return l(e2), e2.tokenValue = a2, e2.tokenRaw = e2.source.slice(o2 + 1, e2.index - (67174409 === r2 ? 1 : 2)), r2;
  }
  function A(e2, n2) {
    for (; 96 !== n2; ) {
      switch (n2) {
        case 36: {
          const t2 = e2.index + 1;
          if (t2 < e2.end && 123 === e2.source.charCodeAt(t2)) return e2.index = t2, e2.column++, -n2;
          break;
        }
        case 10:
        case 8232:
        case 8233:
          e2.column = -1, e2.line++;
      }
      e2.index >= e2.end && t(e2, 17), n2 = l(e2);
    }
    return n2;
  }
  function D(e2, n2) {
    return e2.index >= e2.end && t(e2, 0), e2.index--, e2.column--, S(e2, n2);
  }
  function V(e2, n2, o2) {
    let r2 = e2.currentChar, i2 = 0, s2 = 9, c2 = 64 & o2 ? 0 : 1, u2 = 0, d2 = 0;
    if (64 & o2) i2 = "." + R(e2, r2), r2 = e2.currentChar, 110 === r2 && t(e2, 12);
    else {
      if (48 === r2) if (r2 = l(e2), 120 == (32 | r2)) {
        for (o2 = 136, r2 = l(e2); 4160 & p[r2]; ) 95 !== r2 ? (d2 = 1, i2 = 16 * i2 + g(r2), u2++, r2 = l(e2)) : (d2 || t(e2, 152), d2 = 0, r2 = l(e2));
        0 !== u2 && d2 || t(e2, 0 === u2 ? 21 : 153);
      } else if (111 == (32 | r2)) {
        for (o2 = 132, r2 = l(e2); 4128 & p[r2]; ) 95 !== r2 ? (d2 = 1, i2 = 8 * i2 + (r2 - 48), u2++, r2 = l(e2)) : (d2 || t(e2, 152), d2 = 0, r2 = l(e2));
        0 !== u2 && d2 || t(e2, 0 === u2 ? 0 : 153);
      } else if (98 == (32 | r2)) {
        for (o2 = 130, r2 = l(e2); 4224 & p[r2]; ) 95 !== r2 ? (d2 = 1, i2 = 2 * i2 + (r2 - 48), u2++, r2 = l(e2)) : (d2 || t(e2, 152), d2 = 0, r2 = l(e2));
        0 !== u2 && d2 || t(e2, 0 === u2 ? 0 : 153);
      } else if (32 & p[r2]) for (256 & n2 && t(e2, 1), o2 = 1; 16 & p[r2]; ) {
        if (512 & p[r2]) {
          o2 = 32, c2 = 0;
          break;
        }
        i2 = 8 * i2 + (r2 - 48), r2 = l(e2);
      }
      else 512 & p[r2] ? (256 & n2 && t(e2, 1), e2.flags |= 64, o2 = 32) : 95 === r2 && t(e2, 0);
      if (48 & o2) {
        if (c2) {
          for (; s2 >= 0 && 4112 & p[r2]; ) 95 !== r2 ? (d2 = 0, i2 = 10 * i2 + (r2 - 48), r2 = l(e2), --s2) : (r2 = l(e2), (95 === r2 || 32 & o2) && a(e2.index, e2.line, e2.column, e2.index + 1, e2.line, e2.column, 152), d2 = 1);
          if (d2 && a(e2.index, e2.line, e2.column, e2.index + 1, e2.line, e2.column, 153), s2 >= 0 && !b(r2) && 46 !== r2) return e2.tokenValue = i2, 128 & n2 && (e2.tokenRaw = e2.source.slice(e2.tokenIndex, e2.index)), 134283266;
        }
        i2 += R(e2, r2), r2 = e2.currentChar, 46 === r2 && (95 === l(e2) && t(e2, 0), o2 = 64, i2 += "." + R(e2, e2.currentChar), r2 = e2.currentChar);
      }
    }
    const k2 = e2.index;
    let f2 = 0;
    if (110 === r2 && 128 & o2) f2 = 1, r2 = l(e2);
    else if (101 == (32 | r2)) {
      r2 = l(e2), 256 & p[r2] && (r2 = l(e2));
      const { index: n3 } = e2;
      16 & p[r2] || t(e2, 11), i2 += e2.source.substring(k2, n3) + R(e2, r2), r2 = e2.currentChar;
    }
    return (e2.index < e2.end && 16 & p[r2] || b(r2)) && t(e2, 13), f2 ? (e2.tokenRaw = e2.source.slice(e2.tokenIndex, e2.index), e2.tokenValue = BigInt(e2.tokenRaw.slice(0, -1).replaceAll("_", "")), 134283388) : (e2.tokenValue = 15 & o2 ? i2 : 32 & o2 ? parseFloat(e2.source.substring(e2.tokenIndex, e2.index)) : +i2, 128 & n2 && (e2.tokenRaw = e2.source.slice(e2.tokenIndex, e2.index)), 134283266);
  }
  function R(e2, n2) {
    let t2 = 0, o2 = e2.index, r2 = "";
    for (; 4112 & p[n2]; ) if (95 !== n2) t2 = 0, n2 = l(e2);
    else {
      const { index: i2 } = e2;
      95 === (n2 = l(e2)) && a(e2.index, e2.line, e2.column, e2.index + 1, e2.line, e2.column, 152), t2 = 1, r2 += e2.source.substring(o2, i2), o2 = e2.index;
    }
    return t2 && a(e2.index, e2.line, e2.column, e2.index + 1, e2.line, e2.column, 153), r2 + e2.source.substring(o2, e2.index);
  }
  !function(e2) {
    e2[e2.Empty = 0] = "Empty", e2[e2.Escape = 1] = "Escape", e2[e2.Class = 2] = "Class";
  }(v || (v = {})), function(e2) {
    e2[e2.Empty = 0] = "Empty", e2[e2.IgnoreCase = 1] = "IgnoreCase", e2[e2.Global = 2] = "Global", e2[e2.Multiline = 4] = "Multiline", e2[e2.Unicode = 16] = "Unicode", e2[e2.Sticky = 8] = "Sticky", e2[e2.DotAll = 32] = "DotAll", e2[e2.Indices = 64] = "Indices", e2[e2.UnicodeSets = 128] = "UnicodeSets";
  }(w || (w = {}));
  var N = ["end of source", "identifier", "number", "string", "regular expression", "false", "true", "null", "template continuation", "template tail", "=>", "(", "{", ".", "...", "}", ")", ";", ",", "[", "]", ":", "?", "'", '"', "++", "--", "=", "<<=", ">>=", ">>>=", "**=", "+=", "-=", "*=", "/=", "%=", "^=", "|=", "&=", "||=", "&&=", "??=", "typeof", "delete", "void", "!", "~", "+", "-", "in", "instanceof", "*", "%", "/", "**", "&&", "||", "===", "!==", "==", "!=", "<=", ">=", "<", ">", "<<", ">>", ">>>", "&", "|", "^", "var", "let", "const", "break", "case", "catch", "class", "continue", "debugger", "default", "do", "else", "export", "extends", "finally", "for", "function", "if", "import", "new", "return", "super", "switch", "this", "throw", "try", "while", "with", "implements", "interface", "package", "private", "protected", "public", "static", "yield", "as", "async", "await", "constructor", "get", "set", "accessor", "from", "of", "enum", "eval", "arguments", "escaped keyword", "escaped future reserved keyword", "reserved if strict", "#", "BigIntLiteral", "??", "?.", "WhiteSpace", "Illegal", "LineTerminator", "PrivateField", "Template", "@", "target", "meta", "LineFeed", "Escaped", "JSXText"];
  var U = Object.create(null, { this: { value: 86111 }, function: { value: 86104 }, if: { value: 20569 }, return: { value: 20572 }, var: { value: 86088 }, else: { value: 20563 }, for: { value: 20567 }, new: { value: 86107 }, in: { value: 8673330 }, typeof: { value: 16863275 }, while: { value: 20578 }, case: { value: 20556 }, break: { value: 20555 }, try: { value: 20577 }, catch: { value: 20557 }, delete: { value: 16863276 }, throw: { value: 86112 }, switch: { value: 86110 }, continue: { value: 20559 }, default: { value: 20561 }, instanceof: { value: 8411187 }, do: { value: 20562 }, void: { value: 16863277 }, finally: { value: 20566 }, async: { value: 209005 }, await: { value: 209006 }, class: { value: 86094 }, const: { value: 86090 }, constructor: { value: 12399 }, debugger: { value: 20560 }, export: { value: 20564 }, extends: { value: 20565 }, false: { value: 86021 }, from: { value: 209011 }, get: { value: 209008 }, implements: { value: 36964 }, import: { value: 86106 }, interface: { value: 36965 }, let: { value: 241737 }, null: { value: 86023 }, of: { value: 471156 }, package: { value: 36966 }, private: { value: 36967 }, protected: { value: 36968 }, public: { value: 36969 }, set: { value: 209009 }, static: { value: 36970 }, super: { value: 86109 }, true: { value: 86022 }, with: { value: 20579 }, yield: { value: 241771 }, enum: { value: 86133 }, eval: { value: 537079926 }, as: { value: 77932 }, arguments: { value: 537079927 }, target: { value: 209029 }, meta: { value: 209030 }, accessor: { value: 12402 } });
  function P(e2, n2, t2) {
    for (; m[l(e2)]; ) ;
    return e2.tokenValue = e2.source.slice(e2.tokenIndex, e2.index), 92 !== e2.currentChar && e2.currentChar <= 126 ? U[e2.tokenValue] || 208897 : O(e2, n2, 0, t2);
  }
  function B(e2, n2) {
    const o2 = F(e2);
    return b(o2) || t(e2, 5), e2.tokenValue = String.fromCodePoint(o2), O(e2, n2, 1, 4 & p[o2]);
  }
  function O(e2, n2, o2, r2) {
    let a2 = e2.index;
    for (; e2.index < e2.end; ) if (92 === e2.currentChar) {
      e2.tokenValue += e2.source.slice(a2, e2.index), o2 = 1;
      const n3 = F(e2);
      h(n3) || t(e2, 5), r2 = r2 && 4 & p[n3], e2.tokenValue += String.fromCodePoint(n3), a2 = e2.index;
    } else {
      const n3 = c(e2);
      if (n3 > 0) h(n3) || t(e2, 20, String.fromCodePoint(n3)), e2.currentChar = n3, e2.index++, e2.column++;
      else if (!h(e2.currentChar)) break;
      l(e2);
    }
    e2.index <= e2.end && (e2.tokenValue += e2.source.slice(a2, e2.index));
    const { length: i2 } = e2.tokenValue;
    if (r2 && i2 >= 2 && i2 <= 11) {
      const t2 = U[e2.tokenValue];
      return void 0 === t2 ? 208897 | (o2 ? -2147483648 : 0) : o2 ? 209006 === t2 ? 524800 & n2 ? -2147483528 : -2147483648 | t2 : 256 & n2 ? 36970 === t2 ? -2147483527 : 36864 & ~t2 ? 20480 & ~t2 ? -2147274630 : 67108864 & n2 && !(2048 & n2) ? -2147483648 | t2 : -2147483528 : -2147483527 : !(67108864 & n2) || 2048 & n2 || 20480 & ~t2 ? 241771 === t2 ? 67108864 & n2 ? -2147274630 : 262144 & n2 ? -2147483528 : -2147483648 | t2 : 209005 === t2 ? -2147274630 : 36864 & ~t2 ? -2147483528 : 12288 | t2 | -2147483648 : -2147483648 | t2 : t2;
    }
    return 208897 | (o2 ? -2147483648 : 0);
  }
  function G(e2) {
    let n2 = l(e2);
    if (92 === n2) return 130;
    const o2 = c(e2);
    return o2 && (n2 = o2), b(n2) || t(e2, 96), 130;
  }
  function F(e2) {
    return 117 !== e2.source.charCodeAt(e2.index + 1) && t(e2, 5), e2.currentChar = e2.source.charCodeAt(e2.index += 2), function(e3) {
      let n2 = 0;
      const o2 = e3.currentChar;
      if (123 === o2) {
        const t2 = e3.index - 2;
        for (; 64 & p[l(e3)]; ) n2 = n2 << 4 | g(e3.currentChar), n2 > 1114111 && a(t2, e3.line, e3.column, e3.index, e3.line, e3.column, 104);
        return 125 !== e3.currentChar && a(t2, e3.line, e3.column, e3.index, e3.line, e3.column, 7), l(e3), n2;
      }
      64 & p[o2] || t(e3, 7);
      const r2 = e3.source.charCodeAt(e3.index + 1);
      64 & p[r2] || t(e3, 7);
      const i2 = e3.source.charCodeAt(e3.index + 2);
      64 & p[i2] || t(e3, 7);
      const s2 = e3.source.charCodeAt(e3.index + 3);
      64 & p[s2] || t(e3, 7);
      return n2 = g(o2) << 12 | g(r2) << 8 | g(i2) << 4 | g(s2), e3.currentChar = e3.source.charCodeAt(e3.index += 4), n2;
    }(e2);
  }
  var j = [128, 128, 128, 128, 128, 128, 128, 128, 128, 127, 135, 127, 127, 129, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 127, 16842798, 134283267, 130, 208897, 8391477, 8390213, 134283267, 67174411, 16, 8391476, 25233968, 18, 25233969, 67108877, 8457014, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 21, 1074790417, 8456256, 1077936155, 8390721, 22, 132, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 69271571, 136, 20, 8389959, 208897, 131, 4096, 4096, 4096, 4096, 4096, 4096, 4096, 208897, 4096, 208897, 208897, 4096, 208897, 4096, 208897, 4096, 208897, 4096, 4096, 4096, 208897, 4096, 4096, 208897, 4096, 4096, 2162700, 8389702, 1074790415, 16842799, 128];
  function J(e2, n2) {
    e2.flags = 1 ^ (1 | e2.flags), e2.startIndex = e2.index, e2.startColumn = e2.column, e2.startLine = e2.line, e2.setToken(H(e2, n2, 0));
  }
  function H(e2, n2, o2) {
    const r2 = 0 === e2.index, { source: a2 } = e2;
    let s2 = e2.index, g2 = e2.line, k2 = e2.column;
    for (; e2.index < e2.end; ) {
      e2.tokenIndex = e2.index, e2.tokenColumn = e2.column, e2.tokenLine = e2.line;
      let f2 = e2.currentChar;
      if (f2 <= 126) {
        const i2 = j[f2];
        switch (i2) {
          case 67174411:
          case 16:
          case 2162700:
          case 1074790415:
          case 69271571:
          case 20:
          case 21:
          case 1074790417:
          case 18:
          case 16842799:
          case 132:
          case 128:
            return l(e2), i2;
          case 208897:
            return P(e2, n2, 0);
          case 4096:
            return P(e2, n2, 1);
          case 134283266:
            return V(e2, n2, 144);
          case 134283267:
            return I(e2, n2, f2);
          case 131:
            return S(e2, n2);
          case 136:
            return B(e2, n2);
          case 130:
            return G(e2);
          case 127:
            l(e2);
            break;
          case 129:
            o2 |= 5, d(e2);
            break;
          case 135:
            u(e2, o2), o2 = -5 & o2 | 1;
            break;
          case 8456256: {
            const t2 = l(e2);
            if (e2.index < e2.end) {
              if (60 === t2) return e2.index < e2.end && 61 === l(e2) ? (l(e2), 4194332) : 8390978;
              if (61 === t2) return l(e2), 8390718;
              if (33 === t2) {
                const t3 = e2.index + 1;
                if (t3 + 1 < e2.end && 45 === a2.charCodeAt(t3) && 45 == a2.charCodeAt(t3 + 1)) {
                  e2.column += 3, e2.currentChar = a2.charCodeAt(e2.index += 3), o2 = T(e2, a2, o2, n2, 2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn), s2 = e2.tokenIndex, g2 = e2.tokenLine, k2 = e2.tokenColumn;
                  continue;
                }
                return 8456256;
              }
            }
            return 8456256;
          }
          case 1077936155: {
            l(e2);
            const n3 = e2.currentChar;
            return 61 === n3 ? 61 === l(e2) ? (l(e2), 8390458) : 8390460 : 62 === n3 ? (l(e2), 10) : 1077936155;
          }
          case 16842798:
            return 61 !== l(e2) ? 16842798 : 61 !== l(e2) ? 8390461 : (l(e2), 8390459);
          case 8391477:
            return 61 !== l(e2) ? 8391477 : (l(e2), 4194340);
          case 8391476: {
            if (l(e2), e2.index >= e2.end) return 8391476;
            const n3 = e2.currentChar;
            return 61 === n3 ? (l(e2), 4194338) : 42 !== n3 ? 8391476 : 61 !== l(e2) ? 8391735 : (l(e2), 4194335);
          }
          case 8389959:
            return 61 !== l(e2) ? 8389959 : (l(e2), 4194341);
          case 25233968: {
            l(e2);
            const n3 = e2.currentChar;
            return 43 === n3 ? (l(e2), 33619993) : 61 === n3 ? (l(e2), 4194336) : 25233968;
          }
          case 25233969: {
            l(e2);
            const i3 = e2.currentChar;
            if (45 === i3) {
              if (l(e2), (1 & o2 || r2) && 62 === e2.currentChar) {
                64 & n2 || t(e2, 112), l(e2), o2 = T(e2, a2, o2, n2, 3, s2, g2, k2), s2 = e2.tokenIndex, g2 = e2.tokenLine, k2 = e2.tokenColumn;
                continue;
              }
              return 33619994;
            }
            return 61 === i3 ? (l(e2), 4194337) : 25233969;
          }
          case 8457014:
            if (l(e2), e2.index < e2.end) {
              const t2 = e2.currentChar;
              if (47 === t2) {
                l(e2), o2 = y(e2, a2, o2, 0, e2.tokenIndex, e2.tokenLine, e2.tokenColumn), s2 = e2.tokenIndex, g2 = e2.tokenLine, k2 = e2.tokenColumn;
                continue;
              }
              if (42 === t2) {
                l(e2), o2 = C(e2, a2, o2), s2 = e2.tokenIndex, g2 = e2.tokenLine, k2 = e2.tokenColumn;
                continue;
              }
              if (8192 & n2) return L(e2, n2);
              if (61 === t2) return l(e2), 4259875;
            }
            return 8457014;
          case 67108877: {
            const t2 = l(e2);
            if (t2 >= 48 && t2 <= 57) return V(e2, n2, 80);
            if (46 === t2) {
              const n3 = e2.index + 1;
              if (n3 < e2.end && 46 === a2.charCodeAt(n3)) return e2.column += 2, e2.currentChar = a2.charCodeAt(e2.index += 2), 14;
            }
            return 67108877;
          }
          case 8389702: {
            l(e2);
            const n3 = e2.currentChar;
            return 124 === n3 ? (l(e2), 61 === e2.currentChar ? (l(e2), 4194344) : 8913465) : 61 === n3 ? (l(e2), 4194342) : 8389702;
          }
          case 8390721: {
            l(e2);
            const n3 = e2.currentChar;
            if (61 === n3) return l(e2), 8390719;
            if (62 !== n3) return 8390721;
            if (l(e2), e2.index < e2.end) {
              const n4 = e2.currentChar;
              if (62 === n4) return 61 === l(e2) ? (l(e2), 4194334) : 8390980;
              if (61 === n4) return l(e2), 4194333;
            }
            return 8390979;
          }
          case 8390213: {
            l(e2);
            const n3 = e2.currentChar;
            return 38 === n3 ? (l(e2), 61 === e2.currentChar ? (l(e2), 4194345) : 8913720) : 61 === n3 ? (l(e2), 4194343) : 8390213;
          }
          case 22: {
            let n3 = l(e2);
            if (63 === n3) return l(e2), 61 === e2.currentChar ? (l(e2), 4194346) : 276824445;
            if (46 === n3) {
              const t2 = e2.index + 1;
              if (t2 < e2.end && (n3 = a2.charCodeAt(t2), !(n3 >= 48 && n3 <= 57))) return l(e2), 67108990;
            }
            return 22;
          }
        }
      } else {
        if ((8232 ^ f2) <= 1) {
          o2 = -5 & o2 | 1, d(e2);
          continue;
        }
        const r3 = c(e2);
        if (r3 > 0 && (f2 = r3), i(f2)) return e2.tokenValue = "", O(e2, n2, 0, 0);
        if (160 === (p2 = f2) || 65279 === p2 || 133 === p2 || 5760 === p2 || p2 >= 8192 && p2 <= 8203 || 8239 === p2 || 8287 === p2 || 12288 === p2 || 8201 === p2 || 65519 === p2) {
          l(e2);
          continue;
        }
        t(e2, 20, String.fromCodePoint(f2));
      }
    }
    var p2;
    return 1048576;
  }
  var M = { AElig: "\xC6", AMP: "&", Aacute: "\xC1", Abreve: "\u0102", Acirc: "\xC2", Acy: "\u0410", Afr: "\u{1D504}", Agrave: "\xC0", Alpha: "\u0391", Amacr: "\u0100", And: "\u2A53", Aogon: "\u0104", Aopf: "\u{1D538}", ApplyFunction: "\u2061", Aring: "\xC5", Ascr: "\u{1D49C}", Assign: "\u2254", Atilde: "\xC3", Auml: "\xC4", Backslash: "\u2216", Barv: "\u2AE7", Barwed: "\u2306", Bcy: "\u0411", Because: "\u2235", Bernoullis: "\u212C", Beta: "\u0392", Bfr: "\u{1D505}", Bopf: "\u{1D539}", Breve: "\u02D8", Bscr: "\u212C", Bumpeq: "\u224E", CHcy: "\u0427", COPY: "\xA9", Cacute: "\u0106", Cap: "\u22D2", CapitalDifferentialD: "\u2145", Cayleys: "\u212D", Ccaron: "\u010C", Ccedil: "\xC7", Ccirc: "\u0108", Cconint: "\u2230", Cdot: "\u010A", Cedilla: "\xB8", CenterDot: "\xB7", Cfr: "\u212D", Chi: "\u03A7", CircleDot: "\u2299", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", Colon: "\u2237", Colone: "\u2A74", Congruent: "\u2261", Conint: "\u222F", ContourIntegral: "\u222E", Copf: "\u2102", Coproduct: "\u2210", CounterClockwiseContourIntegral: "\u2233", Cross: "\u2A2F", Cscr: "\u{1D49E}", Cup: "\u22D3", CupCap: "\u224D", DD: "\u2145", DDotrahd: "\u2911", DJcy: "\u0402", DScy: "\u0405", DZcy: "\u040F", Dagger: "\u2021", Darr: "\u21A1", Dashv: "\u2AE4", Dcaron: "\u010E", Dcy: "\u0414", Del: "\u2207", Delta: "\u0394", Dfr: "\u{1D507}", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", Diamond: "\u22C4", DifferentialD: "\u2146", Dopf: "\u{1D53B}", Dot: "\xA8", DotDot: "\u20DC", DotEqual: "\u2250", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrow: "\u2193", DownArrowBar: "\u2913", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVector: "\u21BD", DownLeftVectorBar: "\u2956", DownRightTeeVector: "\u295F", DownRightVector: "\u21C1", DownRightVectorBar: "\u2957", DownTee: "\u22A4", DownTeeArrow: "\u21A7", Downarrow: "\u21D3", Dscr: "\u{1D49F}", Dstrok: "\u0110", ENG: "\u014A", ETH: "\xD0", Eacute: "\xC9", Ecaron: "\u011A", Ecirc: "\xCA", Ecy: "\u042D", Edot: "\u0116", Efr: "\u{1D508}", Egrave: "\xC8", Element: "\u2208", Emacr: "\u0112", EmptySmallSquare: "\u25FB", EmptyVerySmallSquare: "\u25AB", Eogon: "\u0118", Eopf: "\u{1D53C}", Epsilon: "\u0395", Equal: "\u2A75", EqualTilde: "\u2242", Equilibrium: "\u21CC", Escr: "\u2130", Esim: "\u2A73", Eta: "\u0397", Euml: "\xCB", Exists: "\u2203", ExponentialE: "\u2147", Fcy: "\u0424", Ffr: "\u{1D509}", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", Fopf: "\u{1D53D}", ForAll: "\u2200", Fouriertrf: "\u2131", Fscr: "\u2131", GJcy: "\u0403", GT: ">", Gamma: "\u0393", Gammad: "\u03DC", Gbreve: "\u011E", Gcedil: "\u0122", Gcirc: "\u011C", Gcy: "\u0413", Gdot: "\u0120", Gfr: "\u{1D50A}", Gg: "\u22D9", Gopf: "\u{1D53E}", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", Gt: "\u226B", HARDcy: "\u042A", Hacek: "\u02C7", Hat: "^", Hcirc: "\u0124", Hfr: "\u210C", HilbertSpace: "\u210B", Hopf: "\u210D", HorizontalLine: "\u2500", Hscr: "\u210B", Hstrok: "\u0126", HumpDownHump: "\u224E", HumpEqual: "\u224F", IEcy: "\u0415", IJlig: "\u0132", IOcy: "\u0401", Iacute: "\xCD", Icirc: "\xCE", Icy: "\u0418", Idot: "\u0130", Ifr: "\u2111", Igrave: "\xCC", Im: "\u2111", Imacr: "\u012A", ImaginaryI: "\u2148", Implies: "\u21D2", Int: "\u222C", Integral: "\u222B", Intersection: "\u22C2", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", Iogon: "\u012E", Iopf: "\u{1D540}", Iota: "\u0399", Iscr: "\u2110", Itilde: "\u0128", Iukcy: "\u0406", Iuml: "\xCF", Jcirc: "\u0134", Jcy: "\u0419", Jfr: "\u{1D50D}", Jopf: "\u{1D541}", Jscr: "\u{1D4A5}", Jsercy: "\u0408", Jukcy: "\u0404", KHcy: "\u0425", KJcy: "\u040C", Kappa: "\u039A", Kcedil: "\u0136", Kcy: "\u041A", Kfr: "\u{1D50E}", Kopf: "\u{1D542}", Kscr: "\u{1D4A6}", LJcy: "\u0409", LT: "<", Lacute: "\u0139", Lambda: "\u039B", Lang: "\u27EA", Laplacetrf: "\u2112", Larr: "\u219E", Lcaron: "\u013D", Lcedil: "\u013B", Lcy: "\u041B", LeftAngleBracket: "\u27E8", LeftArrow: "\u2190", LeftArrowBar: "\u21E4", LeftArrowRightArrow: "\u21C6", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVector: "\u21C3", LeftDownVectorBar: "\u2959", LeftFloor: "\u230A", LeftRightArrow: "\u2194", LeftRightVector: "\u294E", LeftTee: "\u22A3", LeftTeeArrow: "\u21A4", LeftTeeVector: "\u295A", LeftTriangle: "\u22B2", LeftTriangleBar: "\u29CF", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVector: "\u21BF", LeftUpVectorBar: "\u2958", LeftVector: "\u21BC", LeftVectorBar: "\u2952", Leftarrow: "\u21D0", Leftrightarrow: "\u21D4", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", LessLess: "\u2AA1", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", Lfr: "\u{1D50F}", Ll: "\u22D8", Lleftarrow: "\u21DA", Lmidot: "\u013F", LongLeftArrow: "\u27F5", LongLeftRightArrow: "\u27F7", LongRightArrow: "\u27F6", Longleftarrow: "\u27F8", Longleftrightarrow: "\u27FA", Longrightarrow: "\u27F9", Lopf: "\u{1D543}", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", Lscr: "\u2112", Lsh: "\u21B0", Lstrok: "\u0141", Lt: "\u226A", Map: "\u2905", Mcy: "\u041C", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", MinusPlus: "\u2213", Mopf: "\u{1D544}", Mscr: "\u2133", Mu: "\u039C", NJcy: "\u040A", Nacute: "\u0143", Ncaron: "\u0147", Ncedil: "\u0145", Ncy: "\u041D", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: "\n", Nfr: "\u{1D511}", NoBreak: "\u2060", NonBreakingSpace: "\xA0", Nopf: "\u2115", Not: "\u2AEC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", NotLeftTriangle: "\u22EA", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangle: "\u22EB", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", Nscr: "\u{1D4A9}", Ntilde: "\xD1", Nu: "\u039D", OElig: "\u0152", Oacute: "\xD3", Ocirc: "\xD4", Ocy: "\u041E", Odblac: "\u0150", Ofr: "\u{1D512}", Ograve: "\xD2", Omacr: "\u014C", Omega: "\u03A9", Omicron: "\u039F", Oopf: "\u{1D546}", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", Or: "\u2A54", Oscr: "\u{1D4AA}", Oslash: "\xD8", Otilde: "\xD5", Otimes: "\u2A37", Ouml: "\xD6", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", PartialD: "\u2202", Pcy: "\u041F", Pfr: "\u{1D513}", Phi: "\u03A6", Pi: "\u03A0", PlusMinus: "\xB1", Poincareplane: "\u210C", Popf: "\u2119", Pr: "\u2ABB", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", Prime: "\u2033", Product: "\u220F", Proportion: "\u2237", Proportional: "\u221D", Pscr: "\u{1D4AB}", Psi: "\u03A8", QUOT: '"', Qfr: "\u{1D514}", Qopf: "\u211A", Qscr: "\u{1D4AC}", RBarr: "\u2910", REG: "\xAE", Racute: "\u0154", Rang: "\u27EB", Rarr: "\u21A0", Rarrtl: "\u2916", Rcaron: "\u0158", Rcedil: "\u0156", Rcy: "\u0420", Re: "\u211C", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", Rfr: "\u211C", Rho: "\u03A1", RightAngleBracket: "\u27E9", RightArrow: "\u2192", RightArrowBar: "\u21E5", RightArrowLeftArrow: "\u21C4", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVector: "\u21C2", RightDownVectorBar: "\u2955", RightFloor: "\u230B", RightTee: "\u22A2", RightTeeArrow: "\u21A6", RightTeeVector: "\u295B", RightTriangle: "\u22B3", RightTriangleBar: "\u29D0", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVector: "\u21BE", RightUpVectorBar: "\u2954", RightVector: "\u21C0", RightVectorBar: "\u2953", Rightarrow: "\u21D2", Ropf: "\u211D", RoundImplies: "\u2970", Rrightarrow: "\u21DB", Rscr: "\u211B", Rsh: "\u21B1", RuleDelayed: "\u29F4", SHCHcy: "\u0429", SHcy: "\u0428", SOFTcy: "\u042C", Sacute: "\u015A", Sc: "\u2ABC", Scaron: "\u0160", Scedil: "\u015E", Scirc: "\u015C", Scy: "\u0421", Sfr: "\u{1D516}", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", Sigma: "\u03A3", SmallCircle: "\u2218", Sopf: "\u{1D54A}", Sqrt: "\u221A", Square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", Sscr: "\u{1D4AE}", Star: "\u22C6", Sub: "\u22D0", Subset: "\u22D0", SubsetEqual: "\u2286", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", SuchThat: "\u220B", Sum: "\u2211", Sup: "\u22D1", Superset: "\u2283", SupersetEqual: "\u2287", Supset: "\u22D1", THORN: "\xDE", TRADE: "\u2122", TSHcy: "\u040B", TScy: "\u0426", Tab: "	", Tau: "\u03A4", Tcaron: "\u0164", Tcedil: "\u0162", Tcy: "\u0422", Tfr: "\u{1D517}", Therefore: "\u2234", Theta: "\u0398", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", Tilde: "\u223C", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", Topf: "\u{1D54B}", TripleDot: "\u20DB", Tscr: "\u{1D4AF}", Tstrok: "\u0166", Uacute: "\xDA", Uarr: "\u219F", Uarrocir: "\u2949", Ubrcy: "\u040E", Ubreve: "\u016C", Ucirc: "\xDB", Ucy: "\u0423", Udblac: "\u0170", Ufr: "\u{1D518}", Ugrave: "\xD9", Umacr: "\u016A", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", Uopf: "\u{1D54C}", UpArrow: "\u2191", UpArrowBar: "\u2912", UpArrowDownArrow: "\u21C5", UpDownArrow: "\u2195", UpEquilibrium: "\u296E", UpTee: "\u22A5", UpTeeArrow: "\u21A5", Uparrow: "\u21D1", Updownarrow: "\u21D5", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", Upsi: "\u03D2", Upsilon: "\u03A5", Uring: "\u016E", Uscr: "\u{1D4B0}", Utilde: "\u0168", Uuml: "\xDC", VDash: "\u22AB", Vbar: "\u2AEB", Vcy: "\u0412", Vdash: "\u22A9", Vdashl: "\u2AE6", Vee: "\u22C1", Verbar: "\u2016", Vert: "\u2016", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", Vopf: "\u{1D54D}", Vscr: "\u{1D4B1}", Vvdash: "\u22AA", Wcirc: "\u0174", Wedge: "\u22C0", Wfr: "\u{1D51A}", Wopf: "\u{1D54E}", Wscr: "\u{1D4B2}", Xfr: "\u{1D51B}", Xi: "\u039E", Xopf: "\u{1D54F}", Xscr: "\u{1D4B3}", YAcy: "\u042F", YIcy: "\u0407", YUcy: "\u042E", Yacute: "\xDD", Ycirc: "\u0176", Ycy: "\u042B", Yfr: "\u{1D51C}", Yopf: "\u{1D550}", Yscr: "\u{1D4B4}", Yuml: "\u0178", ZHcy: "\u0416", Zacute: "\u0179", Zcaron: "\u017D", Zcy: "\u0417", Zdot: "\u017B", ZeroWidthSpace: "\u200B", Zeta: "\u0396", Zfr: "\u2128", Zopf: "\u2124", Zscr: "\u{1D4B5}", aacute: "\xE1", abreve: "\u0103", ac: "\u223E", acE: "\u223E\u0333", acd: "\u223F", acirc: "\xE2", acute: "\xB4", acy: "\u0430", aelig: "\xE6", af: "\u2061", afr: "\u{1D51E}", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", alpha: "\u03B1", amacr: "\u0101", amalg: "\u2A3F", amp: "&", and: "\u2227", andand: "\u2A55", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsd: "\u2221", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", aogon: "\u0105", aopf: "\u{1D552}", ap: "\u2248", apE: "\u2A70", apacir: "\u2A6F", ape: "\u224A", apid: "\u224B", apos: "'", approx: "\u2248", approxeq: "\u224A", aring: "\xE5", ascr: "\u{1D4B6}", ast: "*", asymp: "\u2248", asympeq: "\u224D", atilde: "\xE3", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", bNot: "\u2AED", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", barvee: "\u22BD", barwed: "\u2305", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", beta: "\u03B2", beth: "\u2136", between: "\u226C", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bnot: "\u2310", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxDL: "\u2557", boxDR: "\u2554", boxDl: "\u2556", boxDr: "\u2553", boxH: "\u2550", boxHD: "\u2566", boxHU: "\u2569", boxHd: "\u2564", boxHu: "\u2567", boxUL: "\u255D", boxUR: "\u255A", boxUl: "\u255C", boxUr: "\u2559", boxV: "\u2551", boxVH: "\u256C", boxVL: "\u2563", boxVR: "\u2560", boxVh: "\u256B", boxVl: "\u2562", boxVr: "\u255F", boxbox: "\u29C9", boxdL: "\u2555", boxdR: "\u2552", boxdl: "\u2510", boxdr: "\u250C", boxh: "\u2500", boxhD: "\u2565", boxhU: "\u2568", boxhd: "\u252C", boxhu: "\u2534", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxuL: "\u255B", boxuR: "\u2558", boxul: "\u2518", boxur: "\u2514", boxv: "\u2502", boxvH: "\u256A", boxvL: "\u2561", boxvR: "\u255E", boxvh: "\u253C", boxvl: "\u2524", boxvr: "\u251C", bprime: "\u2035", breve: "\u02D8", brvbar: "\xA6", bscr: "\u{1D4B7}", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsol: "\\", bsolb: "\u29C5", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", bumpeq: "\u224F", cacute: "\u0107", cap: "\u2229", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", capcup: "\u2A47", capdot: "\u2A40", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", ccaps: "\u2A4D", ccaron: "\u010D", ccedil: "\xE7", ccirc: "\u0109", ccups: "\u2A4C", ccupssm: "\u2A50", cdot: "\u010B", cedil: "\xB8", cemptyv: "\u29B2", cent: "\xA2", centerdot: "\xB7", cfr: "\u{1D520}", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", chi: "\u03C7", cir: "\u25CB", cirE: "\u29C3", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledR: "\xAE", circledS: "\u24C8", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", clubs: "\u2663", clubsuit: "\u2663", colon: ":", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", conint: "\u222E", copf: "\u{1D554}", coprod: "\u2210", copy: "\xA9", copysr: "\u2117", crarr: "\u21B5", cross: "\u2717", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", cup: "\u222A", cupbrcap: "\u2A48", cupcap: "\u2A46", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", dArr: "\u21D3", dHar: "\u2965", dagger: "\u2020", daleth: "\u2138", darr: "\u2193", dash: "\u2010", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", dcaron: "\u010F", dcy: "\u0434", dd: "\u2146", ddagger: "\u2021", ddarr: "\u21CA", ddotseq: "\u2A77", deg: "\xB0", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", dfr: "\u{1D521}", dharl: "\u21C3", dharr: "\u21C2", diam: "\u22C4", diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", dopf: "\u{1D555}", dot: "\u02D9", doteq: "\u2250", doteqdot: "\u2251", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", downarrow: "\u2193", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", dscr: "\u{1D4B9}", dscy: "\u0455", dsol: "\u29F6", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", dzcy: "\u045F", dzigrarr: "\u27FF", eDDot: "\u2A77", eDot: "\u2251", eacute: "\xE9", easter: "\u2A6E", ecaron: "\u011B", ecir: "\u2256", ecirc: "\xEA", ecolon: "\u2255", ecy: "\u044D", edot: "\u0117", ee: "\u2147", efDot: "\u2252", efr: "\u{1D522}", eg: "\u2A9A", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", emptyv: "\u2205", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", eng: "\u014B", ensp: "\u2002", eogon: "\u0119", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", equals: "=", equest: "\u225F", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erDot: "\u2253", erarr: "\u2971", escr: "\u212F", esdot: "\u2250", esim: "\u2242", eta: "\u03B7", eth: "\xF0", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", expectation: "\u2130", exponentiale: "\u2147", fallingdotseq: "\u2252", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", ffr: "\u{1D523}", filig: "\uFB01", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", fopf: "\u{1D557}", forall: "\u2200", fork: "\u22D4", forkv: "\u2AD9", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", fscr: "\u{1D4BB}", gE: "\u2267", gEl: "\u2A8C", gacute: "\u01F5", gamma: "\u03B3", gammad: "\u03DD", gap: "\u2A86", gbreve: "\u011F", gcirc: "\u011D", gcy: "\u0433", gdot: "\u0121", ge: "\u2265", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", ges: "\u2A7E", gescc: "\u2AA9", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", gfr: "\u{1D524}", gg: "\u226B", ggg: "\u22D9", gimel: "\u2137", gjcy: "\u0453", gl: "\u2277", glE: "\u2A92", gla: "\u2AA5", glj: "\u2AA4", gnE: "\u2269", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", gopf: "\u{1D558}", grave: "`", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", gt: ">", gtcc: "\u2AA7", gtcir: "\u2A7A", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", hArr: "\u21D4", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", hardcy: "\u044A", harr: "\u2194", harrcir: "\u2948", harrw: "\u21AD", hbar: "\u210F", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", hopf: "\u{1D559}", horbar: "\u2015", hscr: "\u{1D4BD}", hslash: "\u210F", hstrok: "\u0127", hybull: "\u2043", hyphen: "\u2010", iacute: "\xED", ic: "\u2063", icirc: "\xEE", icy: "\u0438", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", ifr: "\u{1D526}", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", ijlig: "\u0133", imacr: "\u012B", image: "\u2111", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", imof: "\u22B7", imped: "\u01B5", in: "\u2208", incare: "\u2105", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", int: "\u222B", intcal: "\u22BA", integers: "\u2124", intercal: "\u22BA", intlarhk: "\u2A17", intprod: "\u2A3C", iocy: "\u0451", iogon: "\u012F", iopf: "\u{1D55A}", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", iscr: "\u{1D4BE}", isin: "\u2208", isinE: "\u22F9", isindot: "\u22F5", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", itilde: "\u0129", iukcy: "\u0456", iuml: "\xEF", jcirc: "\u0135", jcy: "\u0439", jfr: "\u{1D527}", jmath: "\u0237", jopf: "\u{1D55B}", jscr: "\u{1D4BF}", jsercy: "\u0458", jukcy: "\u0454", kappa: "\u03BA", kappav: "\u03F0", kcedil: "\u0137", kcy: "\u043A", kfr: "\u{1D528}", kgreen: "\u0138", khcy: "\u0445", kjcy: "\u045C", kopf: "\u{1D55C}", kscr: "\u{1D4C0}", lAarr: "\u21DA", lArr: "\u21D0", lAtail: "\u291B", lBarr: "\u290E", lE: "\u2266", lEg: "\u2A8B", lHar: "\u2962", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", lambda: "\u03BB", lang: "\u27E8", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", laquo: "\xAB", larr: "\u2190", larrb: "\u21E4", larrbfs: "\u291F", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", lat: "\u2AAB", latail: "\u2919", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", lcaron: "\u013E", lcedil: "\u013C", lceil: "\u2308", lcub: "{", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", leftarrow: "\u2190", leftarrowtail: "\u21A2", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", leftrightarrow: "\u2194", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", leftthreetimes: "\u22CB", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", les: "\u2A7D", lescc: "\u2AA8", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", lessgtr: "\u2276", lesssim: "\u2272", lfisht: "\u297C", lfloor: "\u230A", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", ljcy: "\u0459", ll: "\u226A", llarr: "\u21C7", llcorner: "\u231E", llhard: "\u296B", lltri: "\u25FA", lmidot: "\u0140", lmoust: "\u23B0", lmoustache: "\u23B0", lnE: "\u2268", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", longleftarrow: "\u27F5", longleftrightarrow: "\u27F7", longmapsto: "\u27FC", longrightarrow: "\u27F6", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", lstrok: "\u0142", lt: "<", ltcc: "\u2AA6", ltcir: "\u2A79", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltrPar: "\u2996", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", mDDot: "\u223A", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", mcy: "\u043C", mdash: "\u2014", measuredangle: "\u2221", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", mid: "\u2223", midast: "*", midcir: "\u2AF0", middot: "\xB7", minus: "\u2212", minusb: "\u229F", minusd: "\u2238", minusdu: "\u2A2A", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", mopf: "\u{1D55E}", mp: "\u2213", mscr: "\u{1D4C2}", mstpos: "\u223E", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nGg: "\u22D9\u0338", nGt: "\u226B\u20D2", nGtv: "\u226B\u0338", nLeftarrow: "\u21CD", nLeftrightarrow: "\u21CE", nLl: "\u22D8\u0338", nLt: "\u226A\u20D2", nLtv: "\u226A\u0338", nRightarrow: "\u21CF", nVDash: "\u22AF", nVdash: "\u22AE", nabla: "\u2207", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natur: "\u266E", natural: "\u266E", naturals: "\u2115", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", ncaron: "\u0148", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", ncy: "\u043D", ndash: "\u2013", ne: "\u2260", neArr: "\u21D7", nearhk: "\u2924", nearr: "\u2197", nearrow: "\u2197", nedot: "\u2250\u0338", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", nexist: "\u2204", nexists: "\u2204", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", ngsim: "\u2275", ngt: "\u226F", ngtr: "\u226F", nhArr: "\u21CE", nharr: "\u21AE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", njcy: "\u045A", nlArr: "\u21CD", nlE: "\u2266\u0338", nlarr: "\u219A", nldr: "\u2025", nle: "\u2270", nleftarrow: "\u219A", nleftrightarrow: "\u21AE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nlsim: "\u2274", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nmid: "\u2224", nopf: "\u{1D55F}", not: "\xAC", notin: "\u2209", notinE: "\u22F9\u0338", notindot: "\u22F5\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", npar: "\u2226", nparallel: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", npre: "\u2AAF\u0338", nprec: "\u2280", npreceq: "\u2AAF\u0338", nrArr: "\u21CF", nrarr: "\u219B", nrarrc: "\u2933\u0338", nrarrw: "\u219D\u0338", nrightarrow: "\u219B", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvDash: "\u22AD", nvHarr: "\u2904", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwArr: "\u21D6", nwarhk: "\u2923", nwarr: "\u2196", nwarrow: "\u2196", nwnear: "\u2927", oS: "\u24C8", oacute: "\xF3", oast: "\u229B", ocir: "\u229A", ocirc: "\xF4", ocy: "\u043E", odash: "\u229D", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", oelig: "\u0153", ofcir: "\u29BF", ofr: "\u{1D52C}", ogon: "\u02DB", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", omacr: "\u014D", omega: "\u03C9", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", oopf: "\u{1D560}", opar: "\u29B7", operp: "\u29B9", oplus: "\u2295", or: "\u2228", orarr: "\u21BB", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oscr: "\u2134", oslash: "\xF8", osol: "\u2298", otilde: "\xF5", otimes: "\u2297", otimesas: "\u2A36", ouml: "\xF6", ovbar: "\u233D", par: "\u2225", para: "\xB6", parallel: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", pfr: "\u{1D52D}", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plus: "+", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", pointint: "\u2A15", popf: "\u{1D561}", pound: "\xA3", pr: "\u227A", prE: "\u2AB3", prap: "\u2AB7", prcue: "\u227C", pre: "\u2AAF", prec: "\u227A", precapprox: "\u2AB7", preccurlyeq: "\u227C", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", precsim: "\u227E", prime: "\u2032", primes: "\u2119", prnE: "\u2AB5", prnap: "\u2AB9", prnsim: "\u22E8", prod: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", pscr: "\u{1D4C5}", psi: "\u03C8", puncsp: "\u2008", qfr: "\u{1D52E}", qint: "\u2A0C", qopf: "\u{1D562}", qprime: "\u2057", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", quot: '"', rAarr: "\u21DB", rArr: "\u21D2", rAtail: "\u291C", rBarr: "\u290F", rHar: "\u2964", race: "\u223D\u0331", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", rang: "\u27E9", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", rarr: "\u2192", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", rarrtl: "\u21A3", rarrw: "\u219D", ratail: "\u291A", ratio: "\u2236", rationals: "\u211A", rbarr: "\u290D", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", rcaron: "\u0159", rcedil: "\u0157", rceil: "\u2309", rcub: "}", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", rect: "\u25AD", reg: "\xAE", rfisht: "\u297D", rfloor: "\u230B", rfr: "\u{1D52F}", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", rho: "\u03C1", rhov: "\u03F1", rightarrow: "\u2192", rightarrowtail: "\u21A3", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", rightthreetimes: "\u22CC", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoust: "\u23B1", rmoustache: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", ropf: "\u{1D563}", roplus: "\u2A2E", rotimes: "\u2A35", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", rsaquo: "\u203A", rscr: "\u{1D4C7}", rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", ruluhar: "\u2968", rx: "\u211E", sacute: "\u015B", sbquo: "\u201A", sc: "\u227B", scE: "\u2AB4", scap: "\u2AB8", scaron: "\u0161", sccue: "\u227D", sce: "\u2AB0", scedil: "\u015F", scirc: "\u015D", scnE: "\u2AB6", scnap: "\u2ABA", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", scy: "\u0441", sdot: "\u22C5", sdotb: "\u22A1", sdote: "\u2A66", seArr: "\u21D8", searhk: "\u2925", searr: "\u2198", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", shchcy: "\u0449", shcy: "\u0448", shortmid: "\u2223", shortparallel: "\u2225", shy: "\xAD", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", softcy: "\u044C", sol: "/", solb: "\u29C4", solbar: "\u233F", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", squ: "\u25A1", square: "\u25A1", squarf: "\u25AA", squf: "\u25AA", srarr: "\u2192", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", sub: "\u2282", subE: "\u2AC5", subdot: "\u2ABD", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subset: "\u2282", subseteq: "\u2286", subseteqq: "\u2AC5", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succ: "\u227B", succapprox: "\u2AB8", succcurlyeq: "\u227D", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", sum: "\u2211", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", sup: "\u2283", supE: "\u2AC6", supdot: "\u2ABE", supdsub: "\u2AD8", supe: "\u2287", supedot: "\u2AC4", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", supset: "\u2283", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swArr: "\u21D9", swarhk: "\u2926", swarr: "\u2199", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", target: "\u2316", tau: "\u03C4", tbrk: "\u23B4", tcaron: "\u0165", tcedil: "\u0163", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", tfr: "\u{1D531}", there4: "\u2234", therefore: "\u2234", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", thinsp: "\u2009", thkap: "\u2248", thksim: "\u223C", thorn: "\xFE", tilde: "\u02DC", times: "\xD7", timesb: "\u22A0", timesbar: "\u2A31", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", top: "\u22A4", topbot: "\u2336", topcir: "\u2AF1", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", trade: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", tscr: "\u{1D4C9}", tscy: "\u0446", tshcy: "\u045B", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", uArr: "\u21D1", uHar: "\u2963", uacute: "\xFA", uarr: "\u2191", ubrcy: "\u045E", ubreve: "\u016D", ucirc: "\xFB", ucy: "\u0443", udarr: "\u21C5", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", ufr: "\u{1D532}", ugrave: "\xF9", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", umacr: "\u016B", uml: "\xA8", uogon: "\u0173", uopf: "\u{1D566}", uparrow: "\u2191", updownarrow: "\u2195", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", upsi: "\u03C5", upsih: "\u03D2", upsilon: "\u03C5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", uring: "\u016F", urtri: "\u25F9", uscr: "\u{1D4CA}", utdot: "\u22F0", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", uuml: "\xFC", uwangle: "\u29A7", vArr: "\u21D5", vBar: "\u2AE8", vBarv: "\u2AE9", vDash: "\u22A8", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", varr: "\u2195", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", vcy: "\u0432", vdash: "\u22A2", vee: "\u2228", veebar: "\u22BB", veeeq: "\u225A", vellip: "\u22EE", verbar: "|", vert: "|", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", vzigzag: "\u299A", wcirc: "\u0175", wedbar: "\u2A5F", wedge: "\u2227", wedgeq: "\u2259", weierp: "\u2118", wfr: "\u{1D534}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", xfr: "\u{1D535}", xhArr: "\u27FA", xharr: "\u27F7", xi: "\u03BE", xlArr: "\u27F8", xlarr: "\u27F5", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrArr: "\u27F9", xrarr: "\u27F6", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", yacute: "\xFD", yacy: "\u044F", ycirc: "\u0177", ycy: "\u044B", yen: "\xA5", yfr: "\u{1D536}", yicy: "\u0457", yopf: "\u{1D56A}", yscr: "\u{1D4CE}", yucy: "\u044E", yuml: "\xFF", zacute: "\u017A", zcaron: "\u017E", zcy: "\u0437", zdot: "\u017C", zeetrf: "\u2128", zeta: "\u03B6", zfr: "\u{1D537}", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" };
  var z = { 0: 65533, 128: 8364, 130: 8218, 131: 402, 132: 8222, 133: 8230, 134: 8224, 135: 8225, 136: 710, 137: 8240, 138: 352, 139: 8249, 140: 338, 142: 381, 145: 8216, 146: 8217, 147: 8220, 148: 8221, 149: 8226, 150: 8211, 151: 8212, 152: 732, 153: 8482, 154: 353, 155: 8250, 156: 339, 158: 382, 159: 376 };
  function X(e2) {
    return e2.replace(/&(?:[a-zA-Z]+|#[xX][\da-fA-F]+|#\d+);/g, (e3) => {
      if ("#" === e3.charAt(1)) {
        const n2 = e3.charAt(2);
        return function(e4) {
          if (e4 >= 55296 && e4 <= 57343 || e4 > 1114111) return "\uFFFD";
          e4 in z && (e4 = z[e4]);
          return String.fromCodePoint(e4);
        }("X" === n2 || "x" === n2 ? parseInt(e3.slice(3), 16) : parseInt(e3.slice(2), 10));
      }
      return M[e3.slice(1, -1)] || e3;
    });
  }
  function _(e2, n2) {
    return e2.startIndex = e2.tokenIndex = e2.index, e2.startColumn = e2.tokenColumn = e2.column, e2.startLine = e2.tokenLine = e2.line, e2.setToken(8192 & p[e2.currentChar] ? function(e3, n3) {
      const o2 = e3.currentChar;
      let r2 = l(e3);
      const a2 = e3.index;
      for (; r2 !== o2; ) e3.index >= e3.end && t(e3, 16), r2 = l(e3);
      r2 !== o2 && t(e3, 16);
      e3.tokenValue = e3.source.slice(a2, e3.index), l(e3), 128 & n3 && (e3.tokenRaw = e3.source.slice(e3.tokenIndex, e3.index));
      return 134283267;
    }(e2, n2) : H(e2, n2, 0)), e2.getToken();
  }
  function $(e2, n2) {
    if (e2.startIndex = e2.tokenIndex = e2.index, e2.startColumn = e2.tokenColumn = e2.column, e2.startLine = e2.tokenLine = e2.line, e2.index >= e2.end) return void e2.setToken(1048576);
    if (60 === e2.currentChar) return l(e2), void e2.setToken(8456256);
    if (123 === e2.currentChar) return l(e2), void e2.setToken(2162700);
    let o2 = 0;
    for (; e2.index < e2.end; ) {
      const n3 = p[e2.source.charCodeAt(e2.index)];
      if (1024 & n3 ? (o2 |= 5, d(e2)) : 2048 & n3 ? (u(e2, o2), o2 = -5 & o2 | 1) : l(e2), 16384 & p[e2.currentChar]) break;
    }
    e2.tokenIndex === e2.index && t(e2, 0);
    const r2 = e2.source.slice(e2.tokenIndex, e2.index);
    128 & n2 && (e2.tokenRaw = r2), e2.tokenValue = X(r2), e2.setToken(137);
  }
  function Y(e2) {
    if (!(143360 & ~e2.getToken())) {
      const { index: n2 } = e2;
      let t2 = e2.currentChar;
      for (; 32770 & p[t2]; ) t2 = l(e2);
      e2.tokenValue += e2.source.slice(n2, e2.index), e2.setToken(208897, true);
    }
    return e2.getToken();
  }
  function Z(e2, n2) {
    !(1 & e2.flags) && 1048576 & ~e2.getToken() && t(e2, 30, N[255 & e2.getToken()]), Q(e2, n2, 1074790417) || e2.onInsertedSemicolon?.(e2.startIndex);
  }
  function W(e2, n2, t2, o2) {
    return n2 - t2 < 13 && "use strict" === o2 && (!(1048576 & ~e2.getToken()) || 1 & e2.flags) ? 1 : 0;
  }
  function K(e2, n2, t2) {
    return e2.getToken() !== t2 ? 0 : (J(e2, n2), 1);
  }
  function Q(e2, n2, t2) {
    return e2.getToken() === t2 && (J(e2, n2), true);
  }
  function ee(e2, n2, o2) {
    e2.getToken() !== o2 && t(e2, 25, N[255 & o2]), J(e2, n2);
  }
  function ne(e2, n2) {
    switch (n2.type) {
      case "ArrayExpression": {
        n2.type = "ArrayPattern";
        const { elements: t2 } = n2;
        for (let n3 = 0, o2 = t2.length; n3 < o2; ++n3) {
          const o3 = t2[n3];
          o3 && ne(e2, o3);
        }
        return;
      }
      case "ObjectExpression": {
        n2.type = "ObjectPattern";
        const { properties: t2 } = n2;
        for (let n3 = 0, o2 = t2.length; n3 < o2; ++n3) ne(e2, t2[n3]);
        return;
      }
      case "AssignmentExpression":
        return n2.type = "AssignmentPattern", "=" !== n2.operator && t(e2, 71), delete n2.operator, void ne(e2, n2.left);
      case "Property":
        return void ne(e2, n2.value);
      case "SpreadElement":
        n2.type = "RestElement", ne(e2, n2.argument);
    }
  }
  function te(e2, n2, o2, r2, a2) {
    256 & n2 && (36864 & ~r2 || t(e2, 118), a2 || 537079808 & ~r2 || t(e2, 119)), 20480 & ~r2 && -2147483528 !== r2 || t(e2, 102), 24 & o2 && 73 == (255 & r2) && t(e2, 100), 524800 & n2 && 209006 === r2 && t(e2, 110), 262400 & n2 && 241771 === r2 && t(e2, 97, "yield");
  }
  function oe(e2, n2, o2) {
    256 & n2 && (36864 & ~o2 || t(e2, 118), 537079808 & ~o2 || t(e2, 119), -2147483527 === o2 && t(e2, 95), -2147483528 === o2 && t(e2, 95)), 20480 & ~o2 || t(e2, 102), 524800 & n2 && 209006 === o2 && t(e2, 110), 262400 & n2 && 241771 === o2 && t(e2, 97, "yield");
  }
  function re(e2, n2, o2) {
    return 209006 === o2 && (524800 & n2 && t(e2, 110), e2.destructible |= 128), 241771 === o2 && 262144 & n2 && t(e2, 97, "yield"), !(20480 & ~o2 && 36864 & ~o2 && -2147483527 != o2);
  }
  function ae(e2, n2, o2, r2) {
    for (; n2; ) {
      if (n2["$" + o2]) return r2 && t(e2, 137), 1;
      r2 && n2.loop && (r2 = 0), n2 = n2.$;
    }
    return 0;
  }
  function ie(e2, n2, t2, o2, r2, a2) {
    return 2 & n2 && (a2.start = t2, a2.end = e2.startIndex, a2.range = [t2, e2.startIndex]), 4 & n2 && (a2.loc = { start: { line: o2, column: r2 }, end: { line: e2.startLine, column: e2.startColumn } }, e2.sourceFile && (a2.loc.source = e2.sourceFile)), a2;
  }
  function se(e2) {
    switch (e2.type) {
      case "JSXIdentifier":
        return e2.name;
      case "JSXNamespacedName":
        return e2.namespace + ":" + e2.name;
      case "JSXMemberExpression":
        return se(e2.object) + "." + se(e2.property);
    }
  }
  function le(e2, n2, t2) {
    const o2 = ue({ parent: void 0, type: 2 }, 1024);
    return ge(e2, n2, o2, t2, 1, 0), o2;
  }
  function ce(e2, n2, ...t2) {
    const { index: o2, line: r2, column: a2, tokenIndex: i2, tokenLine: s2, tokenColumn: l2 } = e2;
    return { type: n2, params: t2, index: o2, line: r2, column: a2, tokenIndex: i2, tokenLine: s2, tokenColumn: l2 };
  }
  function ue(e2, n2) {
    return { parent: e2, type: n2, scopeError: void 0 };
  }
  function de(e2, n2, t2, o2, r2, a2) {
    4 & r2 ? ke(e2, n2, t2, o2, r2) : ge(e2, n2, t2, o2, r2, a2), 64 & a2 && fe(e2, o2);
  }
  function ge(e2, n2, o2, r2, a2, i2) {
    const s2 = o2["#" + r2];
    !s2 || 2 & s2 || (1 & a2 ? o2.scopeError = ce(e2, 145, r2) : 64 & n2 && !(256 & n2) && 2 & i2 && 64 === s2 && 64 === a2 || t(e2, 145, r2)), 128 & o2.type && o2.parent["#" + r2] && !(2 & o2.parent["#" + r2]) && t(e2, 145, r2), 1024 & o2.type && s2 && !(2 & s2) && 1 & a2 && (o2.scopeError = ce(e2, 145, r2)), 64 & o2.type && 768 & o2.parent["#" + r2] && t(e2, 159, r2), o2["#" + r2] = a2;
  }
  function ke(e2, n2, o2, r2, a2) {
    let i2 = o2;
    for (; i2 && !(256 & i2.type); ) {
      const s2 = i2["#" + r2];
      248 & s2 && (64 & n2 && !(256 & n2) && (128 & a2 && 68 & s2 || 128 & s2 && 68 & a2) || t(e2, 145, r2)), i2 === o2 && 1 & s2 && 1 & a2 && (i2.scopeError = ce(e2, 145, r2)), (256 & s2 || 512 & s2 && !(64 & n2)) && t(e2, 145, r2), i2["#" + r2] = a2, i2 = i2.parent;
    }
  }
  function pe(e2, n2) {
    return n2["#" + e2] ? 1 : n2.parent ? pe(e2, n2.parent) : 0;
  }
  function fe(e2, n2) {
    void 0 !== e2.exportedNames && "" !== n2 && (e2.exportedNames["#" + n2] && t(e2, 147, n2), e2.exportedNames["#" + n2] = 1);
  }
  function me(e2, n2) {
    return 262400 & e2 ? !(512 & e2 && 209006 === n2) && (!(262144 & e2 && 241771 === n2) && !(12288 & ~n2)) : !(12288 & ~n2 && 36864 & ~n2);
  }
  function be(e2, n2, o2) {
    537079808 & ~o2 || (256 & n2 && t(e2, 119), e2.flags |= 512), me(n2, o2) || t(e2, 0);
  }
  function he(e2, n2, o2) {
    let a2, i2, s2, c2 = "";
    null != n2 && (n2.module && (o2 |= 768), n2.next && (o2 |= 1), n2.loc && (o2 |= 4), n2.ranges && (o2 |= 2), n2.uniqueKeyInPattern && (o2 |= 134217728), n2.lexical && (o2 |= 16), n2.webcompat && (o2 |= 64), n2.globalReturn && (o2 |= 1048576), n2.raw && (o2 |= 128), n2.preserveParens && (o2 |= 32), n2.impliedStrict && (o2 |= 256), n2.jsx && (o2 |= 8), n2.source && (c2 = n2.source), null != n2.onComment && (a2 = Array.isArray(n2.onComment) ? /* @__PURE__ */ function(e3, n3) {
      return function(t2, o3, r2, a3, i3) {
        const s3 = { type: t2, value: o3 };
        2 & e3 && (s3.start = r2, s3.end = a3, s3.range = [r2, a3]), 4 & e3 && (s3.loc = i3), n3.push(s3);
      };
    }(o2, n2.onComment) : n2.onComment), null != n2.onInsertedSemicolon && (i2 = n2.onInsertedSemicolon), null != n2.onToken && (s2 = Array.isArray(n2.onToken) ? /* @__PURE__ */ function(e3, n3) {
      return function(t2, o3, r2, a3) {
        const i3 = { token: t2 };
        2 & e3 && (i3.start = o3, i3.end = r2, i3.range = [o3, r2]), 4 & e3 && (i3.loc = a3), n3.push(i3);
      };
    }(o2, n2.onToken) : n2.onToken));
    const u2 = function(e3, n3, t2, o3, r2) {
      let a3 = 1048576, i3 = null;
      return { source: e3, flags: 0, index: 0, line: 1, column: 0, startIndex: 0, end: e3.length, tokenIndex: 0, startColumn: 0, tokenColumn: 0, tokenLine: 1, startLine: 1, sourceFile: n3, tokenValue: "", getToken: () => a3, setToken(e4, n4 = false) {
        if (o3) if (1048576 !== e4) {
          const t3 = { start: { line: this.tokenLine, column: this.tokenColumn }, end: { line: this.line, column: this.column } };
          !n4 && i3 && o3(...i3), i3 = [k(e4), this.tokenIndex, this.index, t3];
        } else i3 && (o3(...i3), i3 = null);
        return a3 = e4;
      }, tokenRaw: "", tokenRegExp: void 0, currentChar: e3.charCodeAt(0), exportedNames: [], exportedBindings: [], assignable: 1, destructible: 0, onComment: t2, onToken: o3, onInsertedSemicolon: r2, leadingDecorators: [] };
    }(e2, c2, a2, s2, i2);
    !function(e3) {
      const { source: n3 } = e3;
      35 === e3.currentChar && 33 === n3.charCodeAt(e3.index + 1) && (l(e3), l(e3), y(e3, n3, 0, 4, e3.tokenIndex, e3.tokenLine, e3.tokenColumn));
    }(u2);
    const d2 = 16 & o2 ? { parent: void 0, type: 2 } : void 0;
    let g2 = [], p2 = "script";
    if (512 & o2) {
      if (p2 = "module", g2 = function(e3, n3, t2) {
        J(e3, 8192 | n3);
        const o3 = [];
        for (; 134283267 === e3.getToken(); ) {
          const { tokenIndex: t3, tokenLine: r2, tokenColumn: a3 } = e3, i3 = e3.getToken();
          o3.push(Ie(e3, n3, un(e3, n3), i3, t3, r2, a3));
        }
        for (; 1048576 !== e3.getToken(); ) o3.push(xe(e3, n3, t2));
        return o3;
      }(u2, 2048 | o2, d2), d2) for (const e3 in u2.exportedBindings) "#" !== e3[0] || d2[e3] || t(u2, 148, e3.slice(1));
    } else g2 = function(e3, n3, t2) {
      J(e3, 67117056 | n3);
      const o3 = [];
      for (; 134283267 === e3.getToken(); ) {
        const { index: t3, tokenIndex: a3, tokenValue: i3, tokenLine: s3, tokenColumn: l2 } = e3, c3 = e3.getToken(), u3 = un(e3, n3);
        W(e3, t3, a3, i3) && (n3 |= 256, 64 & e3.flags && r(e3.tokenIndex, e3.tokenLine, e3.tokenColumn, e3.index, e3.line, e3.column, 9), 4096 & e3.flags && r(e3.tokenIndex, e3.tokenLine, e3.tokenColumn, e3.index, e3.line, e3.column, 15)), o3.push(Ie(e3, n3, u3, c3, a3, s3, l2));
      }
      for (; 1048576 !== e3.getToken(); ) o3.push(Te(e3, n3, t2, void 0, 4, {}));
      return o3;
    }(u2, 2048 | o2, d2);
    const f2 = { type: "Program", sourceType: p2, body: g2 };
    return 2 & o2 && (f2.start = 0, f2.end = e2.length, f2.range = [0, e2.length]), 4 & o2 && (f2.loc = { start: { line: 1, column: 0 }, end: { line: u2.line, column: u2.column } }, u2.sourceFile && (f2.loc.source = c2)), f2;
  }
  function xe(e2, n2, o2) {
    let r2;
    switch (e2.leadingDecorators = En(e2, n2, void 0), e2.getToken()) {
      case 20564:
        r2 = function(e3, n3, o3) {
          const r3 = e3.tokenIndex, a2 = e3.tokenLine, i2 = e3.tokenColumn;
          J(e3, 8192 | n3);
          const s2 = [];
          let l2 = null, c2 = null, u2 = null;
          if (Q(e3, 8192 | n3, 20561)) {
            switch (e3.getToken()) {
              case 86104:
                l2 = dn(e3, n3, o3, void 0, 4, 1, 1, 0, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
                break;
              case 132:
              case 86094:
                l2 = qn(e3, n3, o3, void 0, 1, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
                break;
              case 209005: {
                const { tokenIndex: t2, tokenLine: r4, tokenColumn: a3 } = e3;
                l2 = cn(e3, n3);
                const { flags: i3 } = e3;
                1 & i3 || (86104 === e3.getToken() ? l2 = dn(e3, n3, o3, void 0, 4, 1, 1, 1, t2, r4, a3) : 67174411 === e3.getToken() ? (l2 = In(e3, n3, void 0, l2, 1, 1, 0, i3, t2, r4, a3), l2 = _e(e3, n3, void 0, l2, 0, 0, t2, r4, a3), l2 = je(e3, n3, void 0, 0, 0, t2, r4, a3, l2)) : 143360 & e3.getToken() && (o3 && (o3 = le(e3, n3, e3.tokenValue)), l2 = cn(e3, n3), l2 = Cn(e3, n3, o3, void 0, [l2], 1, t2, r4, a3)));
                break;
              }
              default:
                l2 = Oe(e3, n3, void 0, 1, 0, e3.tokenIndex, e3.tokenLine, e3.tokenColumn), Z(e3, 8192 | n3);
            }
            return o3 && fe(e3, "default"), ie(e3, n3, r3, a2, i2, { type: "ExportDefaultDeclaration", declaration: l2 });
          }
          switch (e3.getToken()) {
            case 8391476: {
              J(e3, n3);
              let s3 = null;
              Q(e3, n3, 77932) && (o3 && fe(e3, e3.tokenValue), s3 = nn(e3, n3)), ee(e3, n3, 209011), 134283267 !== e3.getToken() && t(e3, 105, "Export"), c2 = un(e3, n3);
              const l3 = { type: "ExportAllDeclaration", source: c2, exported: s3 };
              return 1 & n3 && (l3.attributes = Ke(e3, n3)), Z(e3, 8192 | n3), ie(e3, n3, r3, a2, i2, l3);
            }
            case 2162700: {
              J(e3, n3);
              const r4 = [], a3 = [];
              let i3 = 0;
              for (; 143360 & e3.getToken() || 134283267 === e3.getToken(); ) {
                const { tokenIndex: l3, tokenValue: c3, tokenLine: u3, tokenColumn: d3 } = e3, g2 = nn(e3, n3);
                let k2;
                "Literal" === g2.type && (i3 = 1), 77932 === e3.getToken() ? (J(e3, n3), 143360 & e3.getToken() || 134283267 === e3.getToken() || t(e3, 106), o3 && (r4.push(e3.tokenValue), a3.push(c3)), k2 = nn(e3, n3)) : (o3 && (r4.push(e3.tokenValue), a3.push(e3.tokenValue)), k2 = g2), s2.push(ie(e3, n3, l3, u3, d3, { type: "ExportSpecifier", local: g2, exported: k2 })), 1074790415 !== e3.getToken() && ee(e3, n3, 18);
              }
              ee(e3, n3, 1074790415), Q(e3, n3, 209011) ? (134283267 !== e3.getToken() && t(e3, 105, "Export"), c2 = un(e3, n3), 1 & n3 && (u2 = Ke(e3, n3, s2)), o3 && r4.forEach((n4) => fe(e3, n4))) : (i3 && t(e3, 172), o3 && (r4.forEach((n4) => fe(e3, n4)), a3.forEach((n4) => function(e4, n5) {
                void 0 !== e4.exportedBindings && "" !== n5 && (e4.exportedBindings["#" + n5] = 1);
              }(e3, n4)))), Z(e3, 8192 | n3);
              break;
            }
            case 86094:
              l2 = qn(e3, n3, o3, void 0, 2, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
              break;
            case 86104:
              l2 = dn(e3, n3, o3, void 0, 4, 1, 2, 0, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
              break;
            case 241737:
              l2 = Se(e3, n3, o3, void 0, 8, 64, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
              break;
            case 86090:
              l2 = Se(e3, n3, o3, void 0, 16, 64, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
              break;
            case 86088:
              l2 = Ae(e3, n3, o3, void 0, 64, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
              break;
            case 209005: {
              const { tokenIndex: t2, tokenLine: r4, tokenColumn: a3 } = e3;
              if (J(e3, n3), !(1 & e3.flags) && 86104 === e3.getToken()) {
                l2 = dn(e3, n3, o3, void 0, 4, 1, 2, 1, t2, r4, a3);
                break;
              }
            }
            default:
              t(e3, 30, N[255 & e3.getToken()]);
          }
          const d2 = { type: "ExportNamedDeclaration", declaration: l2, specifiers: s2, source: c2 };
          u2 && (d2.attributes = u2);
          return ie(e3, n3, r3, a2, i2, d2);
        }(e2, n2, o2);
        break;
      case 86106:
        r2 = function(e3, n3, o3) {
          const r3 = e3.tokenIndex, a2 = e3.tokenLine, i2 = e3.tokenColumn;
          J(e3, n3);
          let s2 = null;
          const { tokenIndex: l2, tokenLine: c2, tokenColumn: u2 } = e3;
          let d2 = [];
          if (134283267 === e3.getToken()) s2 = un(e3, n3);
          else {
            if (143360 & e3.getToken()) {
              if (d2 = [ie(e3, n3, l2, c2, u2, { type: "ImportDefaultSpecifier", local: Re(e3, n3, o3) })], Q(e3, n3, 18)) switch (e3.getToken()) {
                case 8391476:
                  d2.push(Ne(e3, n3, o3));
                  break;
                case 2162700:
                  Ue(e3, n3, o3, d2);
                  break;
                default:
                  t(e3, 107);
              }
            } else switch (e3.getToken()) {
              case 8391476:
                d2 = [Ne(e3, n3, o3)];
                break;
              case 2162700:
                Ue(e3, n3, o3, d2);
                break;
              case 67174411:
                return Be(e3, n3, void 0, r3, a2, i2);
              case 67108877:
                return Pe(e3, n3, r3, a2, i2);
              default:
                t(e3, 30, N[255 & e3.getToken()]);
            }
            s2 = function(e4, n4) {
              ee(e4, n4, 209011), 134283267 !== e4.getToken() && t(e4, 105, "Import");
              return un(e4, n4);
            }(e3, n3);
          }
          const g2 = { type: "ImportDeclaration", specifiers: d2, source: s2 };
          1 & n3 && (g2.attributes = Ke(e3, n3, d2));
          return Z(e3, 8192 | n3), ie(e3, n3, r3, a2, i2, g2);
        }(e2, n2, o2);
        break;
      default:
        r2 = Te(e2, n2, o2, void 0, 4, {});
    }
    return e2.leadingDecorators.length && t(e2, 170), r2;
  }
  function Te(e2, n2, o2, r2, a2, i2) {
    const s2 = e2.tokenIndex, l2 = e2.tokenLine, c2 = e2.tokenColumn;
    switch (e2.getToken()) {
      case 86104:
        return dn(e2, n2, o2, r2, a2, 1, 0, 0, s2, l2, c2);
      case 132:
      case 86094:
        return qn(e2, n2, o2, r2, 0, s2, l2, c2);
      case 86090:
        return Se(e2, n2, o2, r2, 16, 0, s2, l2, c2);
      case 241737:
        return function(e3, n3, o3, r3, a3, i3, s3, l3) {
          const { tokenValue: c3 } = e3, u2 = e3.getToken();
          let d2 = cn(e3, n3);
          if (2240512 & e3.getToken()) {
            const t2 = De(e3, n3, o3, r3, 8, 0);
            return Z(e3, 8192 | n3), ie(e3, n3, i3, s3, l3, { type: "VariableDeclaration", kind: "let", declarations: t2 });
          }
          e3.assignable = 1, 256 & n3 && t(e3, 85);
          if (21 === e3.getToken()) return we(e3, n3, o3, r3, a3, {}, c3, d2, u2, 0, i3, s3, l3);
          if (10 === e3.getToken()) {
            let t2;
            16 & n3 && (t2 = le(e3, n3, c3)), e3.flags = 128 ^ (128 | e3.flags), d2 = Cn(e3, n3, t2, r3, [d2], 0, i3, s3, l3);
          } else d2 = _e(e3, n3, r3, d2, 0, 0, i3, s3, l3), d2 = je(e3, n3, r3, 0, 0, i3, s3, l3, d2);
          18 === e3.getToken() && (d2 = Ge(e3, n3, r3, 0, i3, s3, l3, d2));
          return ve(e3, n3, d2, i3, s3, l3);
        }(e2, n2, o2, r2, a2, s2, l2, c2);
      case 20564:
        t(e2, 103, "export");
      case 86106:
        switch (J(e2, n2), e2.getToken()) {
          case 67174411:
            return Be(e2, n2, r2, s2, l2, c2);
          case 67108877:
            return Pe(e2, n2, s2, l2, c2);
          default:
            t(e2, 103, "import");
        }
      case 209005:
        return Le(e2, n2, o2, r2, a2, i2, 1, s2, l2, c2);
      default:
        return ye(e2, n2, o2, r2, a2, i2, 1, s2, l2, c2);
    }
  }
  function ye(e2, n2, o2, r2, a2, i2, s2, l2, c2, u2) {
    switch (e2.getToken()) {
      case 86088:
        return Ae(e2, n2, o2, r2, 0, l2, c2, u2);
      case 20572:
        return function(e3, n3, o3, r3, a3, i3) {
          1048576 & n3 || t(e3, 92);
          J(e3, 8192 | n3);
          const s3 = 1 & e3.flags || 1048576 & e3.getToken() ? null : Fe(e3, n3, o3, 0, 1, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
          return Z(e3, 8192 | n3), ie(e3, n3, r3, a3, i3, { type: "ReturnStatement", argument: s3 });
        }(e2, n2, r2, l2, c2, u2);
      case 20569:
        return function(e3, n3, t2, o3, r3, a3, i3, s3) {
          J(e3, n3), ee(e3, 8192 | n3, 67174411), e3.assignable = 1;
          const l3 = Fe(e3, n3, o3, 0, 1, e3.tokenIndex, e3.line, e3.tokenColumn);
          ee(e3, 8192 | n3, 16);
          const c3 = qe(e3, n3, t2, o3, r3, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
          let u3 = null;
          20563 === e3.getToken() && (J(e3, 8192 | n3), u3 = qe(e3, n3, t2, o3, r3, e3.tokenIndex, e3.tokenLine, e3.tokenColumn));
          return ie(e3, n3, a3, i3, s3, { type: "IfStatement", test: l3, consequent: c3, alternate: u3 });
        }(e2, n2, o2, r2, i2, l2, c2, u2);
      case 20567:
        return function(e3, n3, o3, r3, a3, i3, s3, l3) {
          J(e3, n3);
          const c3 = ((524288 & n3) > 0 || (512 & n3) > 0 && (2048 & n3) > 0) && Q(e3, n3, 209006);
          ee(e3, 8192 | n3, 67174411), o3 && (o3 = ue(o3, 1));
          let u3, d2 = null, g2 = null, k2 = 0, p2 = null, f2 = 86088 === e3.getToken() || 241737 === e3.getToken() || 86090 === e3.getToken();
          const { tokenIndex: m2, tokenLine: b2, tokenColumn: h2 } = e3, x2 = e3.getToken();
          f2 ? 241737 === x2 ? (p2 = cn(e3, n3), 2240512 & e3.getToken() ? (8673330 === e3.getToken() ? 256 & n3 && t(e3, 67) : p2 = ie(e3, n3, m2, b2, h2, { type: "VariableDeclaration", kind: "let", declarations: De(e3, 33554432 | n3, o3, r3, 8, 32) }), e3.assignable = 1) : 256 & n3 ? t(e3, 67) : (f2 = false, e3.assignable = 1, p2 = _e(e3, n3, r3, p2, 0, 0, m2, b2, h2), 471156 === e3.getToken() && t(e3, 115))) : (J(e3, n3), p2 = ie(e3, n3, m2, b2, h2, 86088 === x2 ? { type: "VariableDeclaration", kind: "var", declarations: De(e3, 33554432 | n3, o3, r3, 4, 32) } : { type: "VariableDeclaration", kind: "const", declarations: De(e3, 33554432 | n3, o3, r3, 16, 32) }), e3.assignable = 1) : 1074790417 === x2 ? c3 && t(e3, 82) : 2097152 & ~x2 ? p2 = Xe(e3, 33554432 | n3, r3, 1, 0, 1, m2, b2, h2) : (p2 = 2162700 === x2 ? bn(e3, n3, void 0, r3, 1, 0, 0, 2, 32, m2, b2, h2) : kn(e3, n3, void 0, r3, 1, 0, 0, 2, 32, m2, b2, h2), k2 = e3.destructible, 64 & k2 && t(e3, 63), e3.assignable = 16 & k2 ? 2 : 1, p2 = _e(e3, 33554432 | n3, r3, p2, 0, 0, e3.tokenIndex, e3.tokenLine, e3.tokenColumn));
          if (!(262144 & ~e3.getToken())) {
            if (471156 === e3.getToken()) {
              2 & e3.assignable && t(e3, 80, c3 ? "await" : "of"), ne(e3, p2), J(e3, 8192 | n3), u3 = Oe(e3, n3, r3, 1, 0, e3.tokenIndex, e3.tokenLine, e3.tokenColumn), ee(e3, 8192 | n3, 16);
              return ie(e3, n3, i3, s3, l3, { type: "ForOfStatement", left: p2, right: u3, body: Ee(e3, n3, o3, r3, a3), await: c3 });
            }
            2 & e3.assignable && t(e3, 80, "in"), ne(e3, p2), J(e3, 8192 | n3), c3 && t(e3, 82), u3 = Fe(e3, n3, r3, 0, 1, e3.tokenIndex, e3.tokenLine, e3.tokenColumn), ee(e3, 8192 | n3, 16);
            return ie(e3, n3, i3, s3, l3, { type: "ForInStatement", body: Ee(e3, n3, o3, r3, a3), left: p2, right: u3 });
          }
          c3 && t(e3, 82);
          f2 || (8 & k2 && 1077936155 !== e3.getToken() && t(e3, 80, "loop"), p2 = je(e3, 33554432 | n3, r3, 0, 0, m2, b2, h2, p2));
          18 === e3.getToken() && (p2 = Ge(e3, n3, r3, 0, e3.tokenIndex, e3.tokenLine, e3.tokenColumn, p2));
          ee(e3, 8192 | n3, 1074790417), 1074790417 !== e3.getToken() && (d2 = Fe(e3, n3, r3, 0, 1, e3.tokenIndex, e3.tokenLine, e3.tokenColumn));
          ee(e3, 8192 | n3, 1074790417), 16 !== e3.getToken() && (g2 = Fe(e3, n3, r3, 0, 1, e3.tokenIndex, e3.tokenLine, e3.tokenColumn));
          ee(e3, 8192 | n3, 16);
          const T2 = Ee(e3, n3, o3, r3, a3);
          return ie(e3, n3, i3, s3, l3, { type: "ForStatement", init: p2, test: d2, update: g2, body: T2 });
        }(e2, n2, o2, r2, i2, l2, c2, u2);
      case 20562:
        return function(e3, n3, t2, o3, r3, a3, i3, s3) {
          J(e3, 8192 | n3);
          const l3 = Ee(e3, n3, t2, o3, r3);
          ee(e3, n3, 20578), ee(e3, 8192 | n3, 67174411);
          const c3 = Fe(e3, n3, o3, 0, 1, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
          return ee(e3, 8192 | n3, 16), Q(e3, 8192 | n3, 1074790417), ie(e3, n3, a3, i3, s3, { type: "DoWhileStatement", body: l3, test: c3 });
        }(e2, n2, o2, r2, i2, l2, c2, u2);
      case 20578:
        return function(e3, n3, t2, o3, r3, a3, i3, s3) {
          J(e3, n3), ee(e3, 8192 | n3, 67174411);
          const l3 = Fe(e3, n3, o3, 0, 1, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
          ee(e3, 8192 | n3, 16);
          const c3 = Ee(e3, n3, t2, o3, r3);
          return ie(e3, n3, a3, i3, s3, { type: "WhileStatement", test: l3, body: c3 });
        }(e2, n2, o2, r2, i2, l2, c2, u2);
      case 86110:
        return function(e3, n3, o3, r3, a3, i3, s3, l3) {
          J(e3, n3), ee(e3, 8192 | n3, 67174411);
          const c3 = Fe(e3, n3, r3, 0, 1, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
          ee(e3, n3, 16), ee(e3, n3, 2162700);
          const u3 = [];
          let d2 = 0;
          o3 && (o3 = ue(o3, 8));
          for (; 1074790415 !== e3.getToken(); ) {
            const { tokenIndex: i4, tokenLine: s4, tokenColumn: l4 } = e3;
            let c4 = null;
            const g2 = [];
            for (Q(e3, 8192 | n3, 20556) ? c4 = Fe(e3, n3, r3, 0, 1, e3.tokenIndex, e3.tokenLine, e3.tokenColumn) : (ee(e3, 8192 | n3, 20561), d2 && t(e3, 89), d2 = 1), ee(e3, 8192 | n3, 21); 20556 !== e3.getToken() && 1074790415 !== e3.getToken() && 20561 !== e3.getToken(); ) g2.push(Te(e3, 1024 | n3, o3, r3, 2, { $: a3 }));
            u3.push(ie(e3, n3, i4, s4, l4, { type: "SwitchCase", test: c4, consequent: g2 }));
          }
          return ee(e3, 8192 | n3, 1074790415), ie(e3, n3, i3, s3, l3, { type: "SwitchStatement", discriminant: c3, cases: u3 });
        }(e2, n2, o2, r2, i2, l2, c2, u2);
      case 1074790417:
        return function(e3, n3, t2, o3, r3) {
          return J(e3, 8192 | n3), ie(e3, n3, t2, o3, r3, { type: "EmptyStatement" });
        }(e2, n2, l2, c2, u2);
      case 2162700:
        return Ce(e2, n2, o2 ? ue(o2, 2) : o2, r2, i2, l2, c2, u2);
      case 86112:
        return function(e3, n3, o3, r3, a3, i3) {
          J(e3, 8192 | n3), 1 & e3.flags && t(e3, 90);
          const s3 = Fe(e3, n3, o3, 0, 1, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
          return Z(e3, 8192 | n3), ie(e3, n3, r3, a3, i3, { type: "ThrowStatement", argument: s3 });
        }(e2, n2, r2, l2, c2, u2);
      case 20555:
        return function(e3, n3, o3, r3, a3, i3) {
          J(e3, 8192 | n3);
          let s3 = null;
          if (!(1 & e3.flags) && 143360 & e3.getToken()) {
            const { tokenValue: r4 } = e3;
            s3 = cn(e3, 8192 | n3), ae(e3, o3, r4, 0) || t(e3, 138, r4);
          } else 33792 & n3 || t(e3, 69);
          return Z(e3, 8192 | n3), ie(e3, n3, r3, a3, i3, { type: "BreakStatement", label: s3 });
        }(e2, n2, i2, l2, c2, u2);
      case 20559:
        return function(e3, n3, o3, r3, a3, i3) {
          32768 & n3 || t(e3, 68);
          J(e3, n3);
          let s3 = null;
          if (!(1 & e3.flags) && 143360 & e3.getToken()) {
            const { tokenValue: r4 } = e3;
            s3 = cn(e3, 8192 | n3), ae(e3, o3, r4, 1) || t(e3, 138, r4);
          }
          return Z(e3, 8192 | n3), ie(e3, n3, r3, a3, i3, { type: "ContinueStatement", label: s3 });
        }(e2, n2, i2, l2, c2, u2);
      case 20577:
        return function(e3, n3, o3, r3, a3, i3, s3, l3) {
          J(e3, 8192 | n3);
          const c3 = o3 ? ue(o3, 32) : void 0, u3 = Ce(e3, n3, c3, r3, { $: a3 }, e3.tokenIndex, e3.tokenLine, e3.tokenColumn), { tokenIndex: d2, tokenLine: g2, tokenColumn: k2 } = e3, p2 = Q(e3, 8192 | n3, 20557) ? function(e4, n4, o4, r4, a4, i4, s4, l4) {
            let c4 = null, u4 = o4;
            Q(e4, n4, 67174411) && (o4 && (o4 = ue(o4, 4)), c4 = Nn(e4, n4, o4, r4, 2097152 & ~e4.getToken() ? 512 : 256, 0, e4.tokenIndex, e4.tokenLine, e4.tokenColumn), 18 === e4.getToken() ? t(e4, 86) : 1077936155 === e4.getToken() && t(e4, 87), ee(e4, 8192 | n4, 16));
            o4 && (u4 = ue(o4, 64));
            const d3 = Ce(e4, n4, u4, r4, { $: a4 }, e4.tokenIndex, e4.tokenLine, e4.tokenColumn);
            return ie(e4, n4, i4, s4, l4, { type: "CatchClause", param: c4, body: d3 });
          }(e3, n3, o3, r3, a3, d2, g2, k2) : null;
          let f2 = null;
          if (20566 === e3.getToken()) {
            J(e3, 8192 | n3);
            f2 = Ce(e3, n3, c3 ? ue(o3, 4) : void 0, r3, { $: a3 }, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
          }
          p2 || f2 || t(e3, 88);
          return ie(e3, n3, i3, s3, l3, { type: "TryStatement", block: u3, handler: p2, finalizer: f2 });
        }(e2, n2, o2, r2, i2, l2, c2, u2);
      case 20579:
        return function(e3, n3, o3, r3, a3, i3, s3, l3) {
          J(e3, n3), 256 & n3 && t(e3, 91);
          ee(e3, 8192 | n3, 67174411);
          const c3 = Fe(e3, n3, r3, 0, 1, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
          ee(e3, 8192 | n3, 16);
          const u3 = ye(e3, n3, o3, r3, 2, a3, 0, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
          return ie(e3, n3, i3, s3, l3, { type: "WithStatement", object: c3, body: u3 });
        }(e2, n2, o2, r2, i2, l2, c2, u2);
      case 20560:
        return function(e3, n3, t2, o3, r3) {
          return J(e3, 8192 | n3), Z(e3, 8192 | n3), ie(e3, n3, t2, o3, r3, { type: "DebuggerStatement" });
        }(e2, n2, l2, c2, u2);
      case 209005:
        return Le(e2, n2, o2, r2, a2, i2, 0, l2, c2, u2);
      case 20557:
        t(e2, 162);
      case 20566:
        t(e2, 163);
      case 86104:
        t(e2, 256 & n2 ? 76 : 64 & n2 ? 77 : 78);
      case 86094:
        t(e2, 79);
      default:
        return function(e3, n3, o3, r3, a3, i3, s3, l3, c3, u3) {
          const { tokenValue: d2 } = e3, g2 = e3.getToken();
          let k2;
          if (241737 === g2) k2 = cn(e3, n3), 256 & n3 && t(e3, 85), 69271571 === e3.getToken() && t(e3, 84);
          else k2 = Ye(e3, n3, r3, 2, 0, 1, 0, 1, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
          if (143360 & g2 && 21 === e3.getToken()) return we(e3, n3, o3, r3, a3, i3, d2, k2, g2, s3, l3, c3, u3);
          k2 = _e(e3, n3, r3, k2, 0, 0, l3, c3, u3), k2 = je(e3, n3, r3, 0, 0, l3, c3, u3, k2), 18 === e3.getToken() && (k2 = Ge(e3, n3, r3, 0, l3, c3, u3, k2));
          return ve(e3, n3, k2, l3, c3, u3);
        }(e2, n2, o2, r2, a2, i2, s2, l2, c2, u2);
    }
  }
  function Ce(e2, n2, t2, o2, r2, a2, i2, s2) {
    const l2 = [];
    for (ee(e2, 8192 | n2, 2162700); 1074790415 !== e2.getToken(); ) l2.push(Te(e2, n2, t2, o2, 2, { $: r2 }));
    return ee(e2, 8192 | n2, 1074790415), ie(e2, n2, a2, i2, s2, { type: "BlockStatement", body: l2 });
  }
  function ve(e2, n2, t2, o2, r2, a2) {
    return Z(e2, 8192 | n2), ie(e2, n2, o2, r2, a2, { type: "ExpressionStatement", expression: t2 });
  }
  function we(e2, n2, o2, r2, a2, i2, s2, l2, c2, u2, d2, g2, k2) {
    te(e2, n2, 0, c2, 1), function(e3, n3, o3) {
      let r3 = n3;
      for (; r3; ) r3["$" + o3] && t(e3, 136, o3), r3 = r3.$;
      n3["$" + o3] = 1;
    }(e2, i2, s2), J(e2, 8192 | n2);
    const p2 = u2 && !(256 & n2) && 64 & n2 && 86104 === e2.getToken() ? dn(e2, n2, ue(o2, 2), r2, a2, 0, 0, 0, e2.tokenIndex, e2.tokenLine, e2.tokenColumn) : ye(e2, n2, o2, r2, a2, i2, u2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn);
    return ie(e2, n2, d2, g2, k2, { type: "LabeledStatement", label: l2, body: p2 });
  }
  function Le(e2, n2, o2, r2, a2, i2, s2, l2, c2, u2) {
    const { tokenValue: d2 } = e2, g2 = e2.getToken();
    let k2 = cn(e2, n2);
    if (21 === e2.getToken()) return we(e2, n2, o2, r2, a2, i2, d2, k2, g2, 1, l2, c2, u2);
    const p2 = 1 & e2.flags;
    if (!p2) {
      if (86104 === e2.getToken()) return s2 || t(e2, 123), dn(e2, n2, o2, r2, a2, 1, 0, 1, l2, c2, u2);
      if (me(n2, e2.getToken())) return k2 = Ln(e2, n2, r2, 1, l2, c2, u2), 18 === e2.getToken() && (k2 = Ge(e2, n2, r2, 0, l2, c2, u2, k2)), ve(e2, n2, k2, l2, c2, u2);
    }
    return 67174411 === e2.getToken() ? k2 = In(e2, n2, r2, k2, 1, 1, 0, p2, l2, c2, u2) : (10 === e2.getToken() && (be(e2, n2, g2), 36864 & ~g2 || (e2.flags |= 256), k2 = Tn(e2, 524288 | n2, r2, e2.tokenValue, k2, 0, 1, 0, l2, c2, u2)), e2.assignable = 1), k2 = _e(e2, n2, r2, k2, 0, 0, l2, c2, u2), k2 = je(e2, n2, r2, 0, 0, l2, c2, u2, k2), e2.assignable = 1, 18 === e2.getToken() && (k2 = Ge(e2, n2, r2, 0, l2, c2, u2, k2)), ve(e2, n2, k2, l2, c2, u2);
  }
  function Ie(e2, n2, t2, o2, r2, a2, i2) {
    const s2 = e2.startIndex;
    return 1074790417 !== o2 && (e2.assignable = 2, t2 = _e(e2, n2, void 0, t2, 0, 0, r2, a2, i2), 1074790417 !== e2.getToken() && (t2 = je(e2, n2, void 0, 0, 0, r2, a2, i2, t2), 18 === e2.getToken() && (t2 = Ge(e2, n2, void 0, 0, r2, a2, i2, t2))), Z(e2, 8192 | n2)), "Literal" === t2.type && "string" == typeof t2.value ? ie(e2, n2, r2, a2, i2, { type: "ExpressionStatement", expression: t2, directive: e2.source.slice(r2 + 1, s2 - 1) }) : ie(e2, n2, r2, a2, i2, { type: "ExpressionStatement", expression: t2 });
  }
  function qe(e2, n2, t2, o2, r2, a2, i2, s2) {
    return 256 & n2 || !(64 & n2) || 86104 !== e2.getToken() ? ye(e2, n2, t2, o2, 0, { $: r2 }, 0, e2.tokenIndex, e2.tokenLine, e2.tokenColumn) : dn(e2, n2, ue(t2, 2), o2, 0, 0, 0, 0, a2, i2, s2);
  }
  function Ee(e2, n2, t2, o2, r2) {
    return ye(e2, 33554432 ^ (33554432 | n2) | 32768, t2, o2, 0, { loop: 1, $: r2 }, 0, e2.tokenIndex, e2.tokenLine, e2.tokenColumn);
  }
  function Se(e2, n2, t2, o2, r2, a2, i2, s2, l2) {
    J(e2, n2);
    const c2 = De(e2, n2, t2, o2, r2, a2);
    return Z(e2, 8192 | n2), ie(e2, n2, i2, s2, l2, { type: "VariableDeclaration", kind: 8 & r2 ? "let" : "const", declarations: c2 });
  }
  function Ae(e2, n2, t2, o2, r2, a2, i2, s2) {
    J(e2, n2);
    const l2 = De(e2, n2, t2, o2, 4, r2);
    return Z(e2, 8192 | n2), ie(e2, n2, a2, i2, s2, { type: "VariableDeclaration", kind: "var", declarations: l2 });
  }
  function De(e2, n2, o2, r2, a2, i2) {
    let s2 = 1;
    const l2 = [Ve(e2, n2, o2, r2, a2, i2)];
    for (; Q(e2, n2, 18); ) s2++, l2.push(Ve(e2, n2, o2, r2, a2, i2));
    return s2 > 1 && 32 & i2 && 262144 & e2.getToken() && t(e2, 61, N[255 & e2.getToken()]), l2;
  }
  function Ve(e2, n2, o2, a2, i2, s2) {
    const { tokenIndex: l2, tokenLine: c2, tokenColumn: u2 } = e2, d2 = e2.getToken();
    let g2 = null;
    const k2 = Nn(e2, n2, o2, a2, i2, s2, l2, c2, u2);
    return 1077936155 === e2.getToken() ? (J(e2, 8192 | n2), g2 = Oe(e2, n2, a2, 1, 0, e2.tokenIndex, e2.tokenLine, e2.tokenColumn), !(32 & s2) && 2097152 & d2 || (471156 === e2.getToken() || 8673330 === e2.getToken() && (2097152 & d2 || !(4 & i2) || 256 & n2)) && r(l2, c2, u2, e2.index, e2.line, e2.column, 60, 471156 === e2.getToken() ? "of" : "in")) : (16 & i2 || (2097152 & d2) > 0) && 262144 & ~e2.getToken() && t(e2, 59, 16 & i2 ? "const" : "destructuring"), ie(e2, n2, l2, c2, u2, { type: "VariableDeclarator", id: k2, init: g2 });
  }
  function Re(e2, n2, o2) {
    return me(n2, e2.getToken()) || t(e2, 118), 537079808 & ~e2.getToken() || t(e2, 119), o2 && ge(e2, n2, o2, e2.tokenValue, 8, 0), cn(e2, n2);
  }
  function Ne(e2, n2, t2) {
    const { tokenIndex: o2, tokenLine: a2, tokenColumn: i2 } = e2;
    return J(e2, n2), ee(e2, n2, 77932), 134217728 & ~e2.getToken() || r(o2, a2, i2, e2.index, e2.line, e2.column, 30, N[255 & e2.getToken()]), ie(e2, n2, o2, a2, i2, { type: "ImportNamespaceSpecifier", local: Re(e2, n2, t2) });
  }
  function Ue(e2, n2, o2, r2) {
    for (J(e2, n2); 143360 & e2.getToken() || 134283267 === e2.getToken(); ) {
      let { tokenValue: a2, tokenIndex: i2, tokenLine: s2, tokenColumn: l2 } = e2;
      const c2 = e2.getToken(), u2 = nn(e2, n2);
      let d2;
      Q(e2, n2, 77932) ? (134217728 & ~e2.getToken() && 18 !== e2.getToken() ? te(e2, n2, 16, e2.getToken(), 0) : t(e2, 106), a2 = e2.tokenValue, d2 = cn(e2, n2)) : "Identifier" === u2.type ? (te(e2, n2, 16, c2, 0), d2 = u2) : t(e2, 25, N[108]), o2 && ge(e2, n2, o2, a2, 8, 0), r2.push(ie(e2, n2, i2, s2, l2, { type: "ImportSpecifier", local: d2, imported: u2 })), 1074790415 !== e2.getToken() && ee(e2, n2, 18);
    }
    return ee(e2, n2, 1074790415), r2;
  }
  function Pe(e2, n2, t2, o2, r2) {
    let a2 = Ze(e2, n2, ie(e2, n2, t2, o2, r2, { type: "Identifier", name: "import" }), t2, o2, r2);
    return a2 = _e(e2, n2, void 0, a2, 0, 0, t2, o2, r2), a2 = je(e2, n2, void 0, 0, 0, t2, o2, r2, a2), 18 === e2.getToken() && (a2 = Ge(e2, n2, void 0, 0, t2, o2, r2, a2)), ve(e2, n2, a2, t2, o2, r2);
  }
  function Be(e2, n2, t2, o2, r2, a2) {
    let i2 = We(e2, n2, t2, 0, o2, r2, a2);
    return i2 = _e(e2, n2, t2, i2, 0, 0, o2, r2, a2), 18 === e2.getToken() && (i2 = Ge(e2, n2, t2, 0, o2, r2, a2, i2)), ve(e2, n2, i2, o2, r2, a2);
  }
  function Oe(e2, n2, t2, o2, r2, a2, i2, s2) {
    let l2 = Ye(e2, n2, t2, 2, 0, o2, r2, 1, a2, i2, s2);
    return l2 = _e(e2, n2, t2, l2, r2, 0, a2, i2, s2), je(e2, n2, t2, r2, 0, a2, i2, s2, l2);
  }
  function Ge(e2, n2, t2, o2, r2, a2, i2, s2) {
    const l2 = [s2];
    for (; Q(e2, 8192 | n2, 18); ) l2.push(Oe(e2, n2, t2, 1, o2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn));
    return ie(e2, n2, r2, a2, i2, { type: "SequenceExpression", expressions: l2 });
  }
  function Fe(e2, n2, t2, o2, r2, a2, i2, s2) {
    const l2 = Oe(e2, n2, t2, r2, o2, a2, i2, s2);
    return 18 === e2.getToken() ? Ge(e2, n2, t2, o2, a2, i2, s2, l2) : l2;
  }
  function je(e2, n2, o2, r2, a2, i2, s2, l2, c2) {
    const u2 = e2.getToken();
    if (!(4194304 & ~u2)) {
      2 & e2.assignable && t(e2, 26), (!a2 && 1077936155 === u2 && "ArrayExpression" === c2.type || "ObjectExpression" === c2.type) && ne(e2, c2), J(e2, 8192 | n2);
      const d2 = Oe(e2, n2, o2, 1, r2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn);
      return e2.assignable = 2, ie(e2, n2, i2, s2, l2, a2 ? { type: "AssignmentPattern", left: c2, right: d2 } : { type: "AssignmentExpression", left: c2, operator: N[255 & u2], right: d2 });
    }
    return 8388608 & ~u2 || (c2 = Me(e2, n2, o2, r2, i2, s2, l2, 4, u2, c2)), Q(e2, 8192 | n2, 22) && (c2 = He(e2, n2, o2, c2, i2, s2, l2)), c2;
  }
  function Je(e2, n2, t2, o2, r2, a2, i2, s2, l2) {
    const c2 = e2.getToken();
    J(e2, 8192 | n2);
    const u2 = Oe(e2, n2, t2, 1, o2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn);
    return l2 = ie(e2, n2, a2, i2, s2, r2 ? { type: "AssignmentPattern", left: l2, right: u2 } : { type: "AssignmentExpression", left: l2, operator: N[255 & c2], right: u2 }), e2.assignable = 2, l2;
  }
  function He(e2, n2, t2, o2, r2, a2, i2) {
    const s2 = Oe(e2, 33554432 ^ (33554432 | n2), t2, 1, 0, e2.tokenIndex, e2.tokenLine, e2.tokenColumn);
    ee(e2, 8192 | n2, 21), e2.assignable = 1;
    const l2 = Oe(e2, n2, t2, 1, 0, e2.tokenIndex, e2.tokenLine, e2.tokenColumn);
    return e2.assignable = 2, ie(e2, n2, r2, a2, i2, { type: "ConditionalExpression", test: o2, consequent: s2, alternate: l2 });
  }
  function Me(e2, n2, o2, r2, a2, i2, s2, l2, c2, u2) {
    const d2 = 8673330 & -((33554432 & n2) > 0);
    let g2, k2;
    for (e2.assignable = 2; 8388608 & e2.getToken() && (g2 = e2.getToken(), k2 = 3840 & g2, (524288 & g2 && 268435456 & c2 || 524288 & c2 && 268435456 & g2) && t(e2, 165), !(k2 + ((8391735 === g2) << 8) - ((d2 === g2) << 12) <= l2)); ) J(e2, 8192 | n2), u2 = ie(e2, n2, a2, i2, s2, { type: 524288 & g2 || 268435456 & g2 ? "LogicalExpression" : "BinaryExpression", left: u2, right: Me(e2, n2, o2, r2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn, k2, g2, Xe(e2, n2, o2, 0, r2, 1, e2.tokenIndex, e2.tokenLine, e2.tokenColumn)), operator: N[255 & g2] });
    return 1077936155 === e2.getToken() && t(e2, 26), u2;
  }
  function ze(e2, n2, a2, i2, s2, l2, c2) {
    const { tokenIndex: u2, tokenLine: d2, tokenColumn: g2 } = e2;
    ee(e2, 8192 | n2, 2162700);
    const k2 = [];
    if (1074790415 !== e2.getToken()) {
      for (; 134283267 === e2.getToken(); ) {
        const { index: t2, tokenIndex: a3, tokenValue: i3 } = e2, s3 = e2.getToken(), l3 = un(e2, n2);
        W(e2, t2, a3, i3) && (n2 |= 256, 128 & e2.flags && r(a3, d2, g2, e2.index, e2.line, e2.column, 66), 64 & e2.flags && r(a3, d2, g2, e2.index, e2.line, e2.column, 9), 4096 & e2.flags && r(a3, d2, g2, e2.index, e2.line, e2.column, 15), c2 && o(c2)), k2.push(Ie(e2, n2, l3, s3, a3, e2.tokenLine, e2.tokenColumn));
      }
      256 & n2 && (l2 && (537079808 & ~l2 || t(e2, 119), 36864 & ~l2 || t(e2, 40)), 512 & e2.flags && t(e2, 119), 256 & e2.flags && t(e2, 118));
    }
    for (e2.flags = 4928 ^ (4928 | e2.flags), e2.destructible = 256 ^ (256 | e2.destructible); 1074790415 !== e2.getToken(); ) k2.push(Te(e2, n2, a2, i2, 4, {}));
    return ee(e2, 24 & s2 ? 8192 | n2 : n2, 1074790415), e2.flags &= -4289, 1077936155 === e2.getToken() && t(e2, 26), ie(e2, n2, u2, d2, g2, { type: "BlockStatement", body: k2 });
  }
  function Xe(e2, n2, t2, o2, r2, a2, i2, s2, l2) {
    return _e(e2, n2, t2, Ye(e2, n2, t2, 2, 0, o2, r2, a2, i2, s2, l2), r2, 0, i2, s2, l2);
  }
  function _e(e2, n2, o2, r2, a2, i2, s2, l2, c2) {
    if (33619968 & ~e2.getToken() || 1 & e2.flags) {
      if (!(67108864 & ~e2.getToken())) {
        switch (n2 = 33554432 ^ (33554432 | n2), e2.getToken()) {
          case 67108877:
            J(e2, 2048 ^ (67110912 | n2)), 4096 & n2 && 130 === e2.getToken() && "super" === e2.tokenValue && t(e2, 173), e2.assignable = 1;
            r2 = ie(e2, n2, s2, l2, c2, { type: "MemberExpression", object: r2, computed: false, property: $e(e2, 16384 | n2, o2) });
            break;
          case 69271571: {
            let t2 = false;
            2048 & ~e2.flags || (t2 = true, e2.flags = 2048 ^ (2048 | e2.flags)), J(e2, 8192 | n2);
            const { tokenIndex: i3, tokenLine: u2, tokenColumn: d2 } = e2, g2 = Fe(e2, n2, o2, a2, 1, i3, u2, d2);
            ee(e2, n2, 20), e2.assignable = 1, r2 = ie(e2, n2, s2, l2, c2, { type: "MemberExpression", object: r2, computed: true, property: g2 }), t2 && (e2.flags |= 2048);
            break;
          }
          case 67174411: {
            if (!(1024 & ~e2.flags)) return e2.flags = 1024 ^ (1024 | e2.flags), r2;
            let t2 = false;
            2048 & ~e2.flags || (t2 = true, e2.flags = 2048 ^ (2048 | e2.flags));
            const i3 = ln(e2, n2, o2, a2);
            e2.assignable = 2, r2 = ie(e2, n2, s2, l2, c2, { type: "CallExpression", callee: r2, arguments: i3 }), t2 && (e2.flags |= 2048);
            break;
          }
          case 67108990:
            J(e2, 2048 ^ (67110912 | n2)), e2.flags |= 2048, e2.assignable = 2, r2 = function(e3, n3, t2, o3, r3, a3, i3) {
              let s3, l3 = false;
              69271571 !== e3.getToken() && 67174411 !== e3.getToken() || 2048 & ~e3.flags || (l3 = true, e3.flags = 2048 ^ (2048 | e3.flags));
              if (69271571 === e3.getToken()) {
                J(e3, 8192 | n3);
                const { tokenIndex: l4, tokenLine: c3, tokenColumn: u2 } = e3, d2 = Fe(e3, n3, t2, 0, 1, l4, c3, u2);
                ee(e3, n3, 20), e3.assignable = 2, s3 = ie(e3, n3, r3, a3, i3, { type: "MemberExpression", object: o3, computed: true, optional: true, property: d2 });
              } else if (67174411 === e3.getToken()) {
                const l4 = ln(e3, n3, t2, 0);
                e3.assignable = 2, s3 = ie(e3, n3, r3, a3, i3, { type: "CallExpression", callee: o3, arguments: l4, optional: true });
              } else {
                const l4 = $e(e3, n3, t2);
                e3.assignable = 2, s3 = ie(e3, n3, r3, a3, i3, { type: "MemberExpression", object: o3, computed: false, optional: true, property: l4 });
              }
              l3 && (e3.flags |= 2048);
              return s3;
            }(e2, n2, o2, r2, s2, l2, c2);
            break;
          default:
            2048 & ~e2.flags || t(e2, 166), e2.assignable = 2, r2 = ie(e2, n2, s2, l2, c2, { type: "TaggedTemplateExpression", tag: r2, quasi: 67174408 === e2.getToken() ? rn(e2, 16384 | n2, o2) : on(e2, n2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn) });
        }
        r2 = _e(e2, n2, o2, r2, 0, 1, s2, l2, c2);
      }
    } else r2 = function(e3, n3, o3, r3, a3, i3) {
      2 & e3.assignable && t(e3, 55);
      const s3 = e3.getToken();
      return J(e3, n3), e3.assignable = 2, ie(e3, n3, r3, a3, i3, { type: "UpdateExpression", argument: o3, operator: N[255 & s3], prefix: false });
    }(e2, n2, r2, s2, l2, c2);
    return 0 !== i2 || 2048 & ~e2.flags || (e2.flags = 2048 ^ (2048 | e2.flags), r2 = ie(e2, n2, s2, l2, c2, { type: "ChainExpression", expression: r2 })), r2;
  }
  function $e(e2, n2, o2) {
    return 143360 & e2.getToken() || -2147483528 === e2.getToken() || -2147483527 === e2.getToken() || 130 === e2.getToken() || t(e2, 160), 130 === e2.getToken() ? Vn(e2, n2, o2, 0, e2.tokenIndex, e2.tokenLine, e2.tokenColumn) : cn(e2, n2);
  }
  function Ye(e2, n2, o2, a2, i2, s2, l2, c2, u2, d2, g2) {
    if (!(143360 & ~e2.getToken())) {
      switch (e2.getToken()) {
        case 209006:
          return function(e3, n3, o3, a3, i3, s3, l3, c3) {
            i3 && (e3.destructible |= 128), 268435456 & n3 && t(e3, 177);
            const u3 = xn(e3, n3, o3, s3, l3, c3);
            if ("ArrowFunctionExpression" === u3.type || !(65536 & e3.getToken())) return 524288 & n3 && r(s3, l3, c3, e3.startIndex, e3.startLine, e3.startColumn, 176), 512 & n3 && r(s3, l3, c3, e3.startIndex, e3.startLine, e3.startColumn, 110), 2097152 & n3 && 524288 & n3 && r(s3, l3, c3, e3.startIndex, e3.startLine, e3.startColumn, 110), u3;
            if (2097152 & n3 && r(s3, l3, c3, e3.startIndex, e3.startLine, e3.startColumn, 31), 524288 & n3 || 512 & n3 && 2048 & n3) {
              a3 && r(s3, l3, c3, e3.startIndex, e3.startLine, e3.startColumn, 0);
              const i4 = Xe(e3, n3, o3, 0, 0, 1, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
              return 8391735 === e3.getToken() && t(e3, 33), e3.assignable = 2, ie(e3, n3, s3, l3, c3, { type: "AwaitExpression", argument: i4 });
            }
            return 512 & n3 && r(s3, l3, c3, e3.startIndex, e3.startLine, e3.startColumn, 98), u3;
          }(e2, n2, o2, i2, l2, u2, d2, g2);
        case 241771:
          return function(e3, n3, o3, r2, a3, i3, s3, l3) {
            if (r2 && (e3.destructible |= 256), 262144 & n3) {
              J(e3, 8192 | n3), 2097152 & n3 && t(e3, 32), a3 || t(e3, 26), 22 === e3.getToken() && t(e3, 124);
              let r3 = null, c3 = false;
              return 1 & e3.flags ? 8391476 === e3.getToken() && t(e3, 30, N[255 & e3.getToken()]) : (c3 = Q(e3, 8192 | n3, 8391476), (77824 & e3.getToken() || c3) && (r3 = Oe(e3, n3, o3, 1, 0, e3.tokenIndex, e3.tokenLine, e3.tokenColumn))), e3.assignable = 2, ie(e3, n3, i3, s3, l3, { type: "YieldExpression", argument: r3, delegate: c3 });
            }
            return 256 & n3 && t(e3, 97, "yield"), xn(e3, n3, o3, i3, s3, l3);
          }(e2, n2, o2, l2, s2, u2, d2, g2);
        case 209005:
          return function(e3, n3, o3, r2, a3, i3, s3, l3, c3, u3) {
            const d3 = e3.getToken(), g3 = cn(e3, n3), { flags: k3 } = e3;
            if (!(1 & k3)) {
              if (86104 === e3.getToken()) return gn(e3, n3, o3, 1, r2, l3, c3, u3);
              if (me(n3, e3.getToken())) return a3 || t(e3, 0), 36864 & ~e3.getToken() || (e3.flags |= 256), Ln(e3, n3, o3, i3, l3, c3, u3);
            }
            return s3 || 67174411 !== e3.getToken() ? 10 === e3.getToken() ? (be(e3, n3, d3), s3 && t(e3, 51), 36864 & ~d3 || (e3.flags |= 256), Tn(e3, n3, o3, e3.tokenValue, g3, s3, i3, 0, l3, c3, u3)) : (e3.assignable = 1, g3) : In(e3, n3, o3, g3, i3, 1, 0, k3, l3, c3, u3);
          }(e2, n2, o2, l2, c2, s2, i2, u2, d2, g2);
      }
      const { tokenValue: k2 } = e2, p2 = e2.getToken(), f2 = cn(e2, 16384 | n2);
      return 10 === e2.getToken() ? (c2 || t(e2, 0), be(e2, n2, p2), 36864 & ~p2 || (e2.flags |= 256), Tn(e2, n2, o2, k2, f2, i2, s2, 0, u2, d2, g2)) : (!(4096 & n2) || 8388608 & n2 || 2097152 & n2 || "arguments" !== e2.tokenValue || t(e2, 130), 73 == (255 & p2) && (256 & n2 && t(e2, 113), 24 & a2 && t(e2, 100)), e2.assignable = 256 & n2 && !(537079808 & ~p2) ? 2 : 1, f2);
    }
    if (!(134217728 & ~e2.getToken())) return un(e2, n2);
    switch (e2.getToken()) {
      case 33619993:
      case 33619994:
        return function(e3, n3, o3, r2, a3, i3, s3, l3) {
          r2 && t(e3, 56), a3 || t(e3, 0);
          const c3 = e3.getToken();
          J(e3, 8192 | n3);
          const u3 = Xe(e3, n3, o3, 0, 0, 1, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
          return 2 & e3.assignable && t(e3, 55), e3.assignable = 2, ie(e3, n3, i3, s3, l3, { type: "UpdateExpression", argument: u3, operator: N[255 & c3], prefix: true });
        }(e2, n2, o2, i2, c2, u2, d2, g2);
      case 16863276:
      case 16842798:
      case 16842799:
      case 25233968:
      case 25233969:
      case 16863275:
      case 16863277:
        return function(e3, n3, o3, r2, a3, i3, s3, l3) {
          r2 || t(e3, 0);
          const c3 = e3.getToken();
          J(e3, 8192 | n3);
          const u3 = Xe(e3, n3, o3, 0, l3, 1, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
          var d3;
          return 8391735 === e3.getToken() && t(e3, 33), 256 & n3 && 16863276 === c3 && ("Identifier" === u3.type ? t(e3, 121) : (d3 = u3).property && "PrivateIdentifier" === d3.property.type && t(e3, 127)), e3.assignable = 2, ie(e3, n3, a3, i3, s3, { type: "UnaryExpression", operator: N[255 & c3], argument: u3, prefix: true });
        }(e2, n2, o2, c2, u2, d2, g2, l2);
      case 86104:
        return gn(e2, n2, o2, 0, l2, u2, d2, g2);
      case 2162700:
        return function(e3, n3, o3, r2, a3, i3, s3, l3) {
          const c3 = bn(e3, n3, void 0, o3, r2, a3, 0, 2, 0, i3, s3, l3);
          64 & e3.destructible && t(e3, 63);
          8 & e3.destructible && t(e3, 62);
          return c3;
        }(e2, n2, o2, s2 ? 0 : 1, l2, u2, d2, g2);
      case 69271571:
        return function(e3, n3, o3, r2, a3, i3, s3, l3) {
          const c3 = kn(e3, n3, void 0, o3, r2, a3, 0, 2, 0, i3, s3, l3);
          64 & e3.destructible && t(e3, 63);
          8 & e3.destructible && t(e3, 62);
          return c3;
        }(e2, n2, o2, s2 ? 0 : 1, l2, u2, d2, g2);
      case 67174411:
        return function(e3, n3, o3, r2, a3, i3, s3, l3, c3) {
          e3.flags = 128 ^ (128 | e3.flags);
          const { tokenIndex: u3, tokenLine: d3, tokenColumn: g3 } = e3;
          J(e3, 67117056 | n3);
          const k2 = 16 & n3 ? ue({ parent: void 0, type: 2 }, 1024) : void 0;
          if (n3 = 33554432 ^ (33554432 | n3), Q(e3, n3, 16)) return yn(e3, n3, k2, o3, [], r2, 0, s3, l3, c3);
          let p2, f2 = 0;
          e3.destructible &= -385;
          let m2 = [], b2 = 0, h2 = 0, x2 = 0;
          const { tokenIndex: T2, tokenLine: y2, tokenColumn: C2 } = e3;
          e3.assignable = 1;
          for (; 16 !== e3.getToken(); ) {
            const { tokenIndex: r3, tokenLine: s4, tokenColumn: l4 } = e3, c4 = e3.getToken();
            if (143360 & c4) k2 && ge(e3, n3, k2, e3.tokenValue, 1, 0), 537079808 & ~c4 ? 36864 & ~c4 || (x2 = 1) : h2 = 1, p2 = Ye(e3, n3, o3, a3, 0, 1, 1, 1, r3, s4, l4), 16 === e3.getToken() || 18 === e3.getToken() ? 2 & e3.assignable && (f2 |= 16, h2 = 1) : (1077936155 === e3.getToken() ? h2 = 1 : f2 |= 16, p2 = _e(e3, n3, o3, p2, 1, 0, r3, s4, l4), 16 !== e3.getToken() && 18 !== e3.getToken() && (p2 = je(e3, n3, o3, 1, 0, r3, s4, l4, p2)));
            else {
              if (2097152 & ~c4) {
                if (14 === c4) {
                  p2 = fn(e3, n3, k2, o3, 16, a3, i3, 0, 1, 0, r3, s4, l4), 16 & e3.destructible && t(e3, 74), h2 = 1, !b2 || 16 !== e3.getToken() && 18 !== e3.getToken() || m2.push(p2), f2 |= 8;
                  break;
                }
                if (f2 |= 16, p2 = Oe(e3, n3, o3, 1, 1, r3, s4, l4), !b2 || 16 !== e3.getToken() && 18 !== e3.getToken() || m2.push(p2), 18 === e3.getToken() && (b2 || (b2 = 1, m2 = [p2])), b2) {
                  for (; Q(e3, 8192 | n3, 18); ) m2.push(Oe(e3, n3, o3, 1, 1, e3.tokenIndex, e3.tokenLine, e3.tokenColumn));
                  e3.assignable = 2, p2 = ie(e3, n3, T2, y2, C2, { type: "SequenceExpression", expressions: m2 });
                }
                return ee(e3, n3, 16), e3.destructible = f2, p2;
              }
              p2 = 2162700 === c4 ? bn(e3, 67108864 | n3, k2, o3, 0, 1, 0, a3, i3, r3, s4, l4) : kn(e3, 67108864 | n3, k2, o3, 0, 1, 0, a3, i3, r3, s4, l4), f2 |= e3.destructible, h2 = 1, e3.assignable = 2, 16 !== e3.getToken() && 18 !== e3.getToken() && (8 & f2 && t(e3, 122), p2 = _e(e3, n3, o3, p2, 0, 0, r3, s4, l4), f2 |= 16, 16 !== e3.getToken() && 18 !== e3.getToken() && (p2 = je(e3, n3, o3, 0, 0, r3, s4, l4, p2)));
            }
            if (!b2 || 16 !== e3.getToken() && 18 !== e3.getToken() || m2.push(p2), !Q(e3, 8192 | n3, 18)) break;
            if (b2 || (b2 = 1, m2 = [p2]), 16 === e3.getToken()) {
              f2 |= 8;
              break;
            }
          }
          b2 && (e3.assignable = 2, p2 = ie(e3, n3, T2, y2, C2, { type: "SequenceExpression", expressions: m2 }));
          ee(e3, n3, 16), 16 & f2 && 8 & f2 && t(e3, 151);
          if (f2 |= 256 & e3.destructible ? 256 : 128 & e3.destructible ? 128 : 0, 10 === e3.getToken()) return 48 & f2 && t(e3, 49), 524800 & n3 && 128 & f2 && t(e3, 31), 262400 & n3 && 256 & f2 && t(e3, 32), h2 && (e3.flags |= 128), x2 && (e3.flags |= 256), yn(e3, n3, k2, o3, b2 ? m2 : [p2], r2, 0, s3, l3, c3);
          64 & f2 && t(e3, 63);
          8 & f2 && t(e3, 144);
          return e3.destructible = 256 ^ (256 | e3.destructible) | f2, 32 & n3 ? ie(e3, n3, u3, d3, g3, { type: "ParenthesizedExpression", expression: p2 }) : p2;
        }(e2, 16384 | n2, o2, s2, 1, 0, u2, d2, g2);
      case 86021:
      case 86022:
      case 86023:
        return function(e3, n3, t2, o3, r2) {
          const a3 = N[255 & e3.getToken()], i3 = 86023 === e3.getToken() ? null : "true" === a3;
          return J(e3, n3), e3.assignable = 2, ie(e3, n3, t2, o3, r2, 128 & n3 ? { type: "Literal", value: i3, raw: a3 } : { type: "Literal", value: i3 });
        }(e2, n2, u2, d2, g2);
      case 86111:
        return function(e3, n3) {
          const { tokenIndex: t2, tokenLine: o3, tokenColumn: r2 } = e3;
          return J(e3, n3), e3.assignable = 2, ie(e3, n3, t2, o3, r2, { type: "ThisExpression" });
        }(e2, n2);
      case 65540:
        return function(e3, n3, t2, o3, r2) {
          const { tokenRaw: a3, tokenRegExp: i3, tokenValue: s3 } = e3;
          return J(e3, n3), e3.assignable = 2, ie(e3, n3, t2, o3, r2, 128 & n3 ? { type: "Literal", value: s3, regex: i3, raw: a3 } : { type: "Literal", value: s3, regex: i3 });
        }(e2, n2, u2, d2, g2);
      case 132:
      case 86094:
        return function(e3, n3, o3, r2, a3, i3, s3) {
          let l3 = null, c3 = null;
          const u3 = En(e3, n3, o3);
          u3.length && (a3 = e3.tokenIndex, i3 = e3.tokenLine, s3 = e3.tokenColumn);
          n3 = 4194304 ^ (4194560 | n3), J(e3, n3), 4096 & e3.getToken() && 20565 !== e3.getToken() && (re(e3, n3, e3.getToken()) && t(e3, 118), 537079808 & ~e3.getToken() || t(e3, 119), l3 = cn(e3, n3));
          let d3 = n3;
          Q(e3, 8192 | n3, 20565) ? (c3 = Xe(e3, n3, o3, 0, r2, 0, e3.tokenIndex, e3.tokenLine, e3.tokenColumn), d3 |= 131072) : d3 = 131072 ^ (131072 | d3);
          const g3 = An(e3, d3, n3, void 0, o3, 2, 0, r2);
          return e3.assignable = 2, ie(e3, n3, a3, i3, s3, { type: "ClassExpression", id: l3, superClass: c3, body: g3, ...1 & n3 ? { decorators: u3 } : null });
        }(e2, n2, o2, l2, u2, d2, g2);
      case 86109:
        return function(e3, n3, o3, r2, a3) {
          switch (J(e3, n3), e3.getToken()) {
            case 67108990:
              t(e3, 167);
            case 67174411:
              131072 & n3 || t(e3, 28), e3.assignable = 2;
              break;
            case 69271571:
            case 67108877:
              65536 & n3 || t(e3, 29), e3.assignable = 1;
              break;
            default:
              t(e3, 30, "super");
          }
          return ie(e3, n3, o3, r2, a3, { type: "Super" });
        }(e2, n2, u2, d2, g2);
      case 67174409:
        return on(e2, n2, u2, d2, g2);
      case 67174408:
        return rn(e2, n2, o2);
      case 86107:
        return function(e3, n3, o3, r2, a3, i3, s3) {
          const l3 = cn(e3, 8192 | n3), { tokenIndex: c3, tokenLine: u3, tokenColumn: d3 } = e3;
          if (Q(e3, n3, 67108877)) {
            if (16777216 & n3 && 209029 === e3.getToken()) return e3.assignable = 2, function(e4, n4, t2, o4, r3, a4) {
              const i4 = cn(e4, n4);
              return ie(e4, n4, o4, r3, a4, { type: "MetaProperty", meta: t2, property: i4 });
            }(e3, n3, l3, a3, i3, s3);
            t(e3, 94);
          }
          e3.assignable = 2, 16842752 & ~e3.getToken() || t(e3, 65, N[255 & e3.getToken()]);
          const g3 = Ye(e3, n3, o3, 2, 1, 0, r2, 1, c3, u3, d3);
          n3 = 33554432 ^ (33554432 | n3), 67108990 === e3.getToken() && t(e3, 168);
          const k2 = wn(e3, n3, o3, g3, r2, c3, u3, d3);
          return e3.assignable = 2, ie(e3, n3, a3, i3, s3, { type: "NewExpression", callee: k2, arguments: 67174411 === e3.getToken() ? ln(e3, n3, o3, r2) : [] });
        }(e2, n2, o2, l2, u2, d2, g2);
      case 134283388:
        return tn(e2, n2, u2, d2, g2);
      case 130:
        return Vn(e2, n2, o2, 0, u2, d2, g2);
      case 86106:
        return function(e3, n3, o3, r2, a3, i3, s3, l3) {
          let c3 = cn(e3, n3);
          if (67108877 === e3.getToken()) return Ze(e3, n3, c3, i3, s3, l3);
          r2 && t(e3, 142);
          return c3 = We(e3, n3, o3, a3, i3, s3, l3), e3.assignable = 2, _e(e3, n3, o3, c3, a3, 0, i3, s3, l3);
        }(e2, n2, o2, i2, l2, u2, d2, g2);
      case 8456256:
        if (8 & n2) return Pn(e2, n2, o2, 0, u2, d2, g2);
      default:
        if (me(n2, e2.getToken())) return xn(e2, n2, o2, u2, d2, g2);
        t(e2, 30, N[255 & e2.getToken()]);
    }
  }
  function Ze(e2, n2, o2, r2, a2, i2) {
    512 & n2 || t(e2, 169), J(e2, n2);
    const s2 = e2.getToken();
    return 209030 !== s2 && "meta" !== e2.tokenValue ? t(e2, 174) : -2147483648 & s2 && t(e2, 175), e2.assignable = 2, ie(e2, n2, r2, a2, i2, { type: "MetaProperty", meta: o2, property: cn(e2, n2) });
  }
  function We(e2, n2, o2, r2, a2, i2, s2) {
    ee(e2, 8192 | n2, 67174411), 14 === e2.getToken() && t(e2, 143);
    const l2 = { type: "ImportExpression", source: Oe(e2, n2, o2, 1, r2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn) };
    if (1 & n2) {
      let t2 = null;
      if (18 === e2.getToken() && (ee(e2, n2, 18), 16 !== e2.getToken())) {
        t2 = Oe(e2, 33554432 ^ (33554432 | n2), o2, 1, r2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn);
      }
      l2.options = t2, Q(e2, n2, 18);
    }
    return ee(e2, n2, 16), ie(e2, n2, a2, i2, s2, l2);
  }
  function Ke(e2, n2, o2 = null) {
    if (!Q(e2, n2, 20579)) return [];
    ee(e2, n2, 2162700);
    const r2 = [], a2 = /* @__PURE__ */ new Set();
    for (; 1074790415 !== e2.getToken(); ) {
      const i2 = e2.tokenIndex, s2 = e2.tokenLine, l2 = e2.tokenColumn, c2 = en(e2, n2);
      ee(e2, n2, 21);
      const u2 = Qe(e2, n2), d2 = "Literal" === c2.type ? c2.value : c2.name;
      if ("type" === d2 && "json" === u2.value) {
        null === o2 || 1 === o2.length && ("ImportDefaultSpecifier" === o2[0].type || "ImportNamespaceSpecifier" === o2[0].type || "ImportSpecifier" === o2[0].type && "Identifier" === o2[0].imported.type && "default" === o2[0].imported.name || "ExportSpecifier" === o2[0].type && "Identifier" === o2[0].local.type && "default" === o2[0].local.name) || t(e2, 140);
      }
      a2.has(d2) && t(e2, 145, `${d2}`), a2.add(d2), r2.push(ie(e2, n2, i2, s2, l2, { type: "ImportAttribute", key: c2, value: u2 })), 1074790415 !== e2.getToken() && ee(e2, n2, 18);
    }
    return ee(e2, n2, 1074790415), r2;
  }
  function Qe(e2, n2) {
    if (134283267 === e2.getToken()) return un(e2, n2);
    t(e2, 30, N[255 & e2.getToken()]);
  }
  function en(e2, n2) {
    return 134283267 === e2.getToken() ? un(e2, n2) : 143360 & e2.getToken() ? cn(e2, n2) : void t(e2, 30, N[255 & e2.getToken()]);
  }
  function nn(e2, n2) {
    return 134283267 === e2.getToken() ? (function(e3, n3) {
      const o2 = n3.length;
      for (let r2 = 0; r2 < o2; r2++) {
        const a2 = n3.charCodeAt(r2);
        55296 == (64512 & a2) && (a2 > 56319 || ++r2 >= o2 || 56320 != (64512 & n3.charCodeAt(r2))) && t(e3, 171, JSON.stringify(n3.charAt(r2--)));
      }
    }(e2, e2.tokenValue), un(e2, n2)) : 143360 & e2.getToken() ? cn(e2, n2) : void t(e2, 30, N[255 & e2.getToken()]);
  }
  function tn(e2, n2, t2, o2, r2) {
    const { tokenRaw: a2, tokenValue: i2 } = e2;
    return J(e2, n2), e2.assignable = 2, ie(e2, n2, t2, o2, r2, 128 & n2 ? { type: "Literal", value: i2, bigint: a2.slice(0, -1), raw: a2 } : { type: "Literal", value: i2, bigint: a2.slice(0, -1) });
  }
  function on(e2, n2, t2, o2, r2) {
    e2.assignable = 2;
    const { tokenValue: a2, tokenRaw: i2, tokenIndex: s2, tokenLine: l2, tokenColumn: c2 } = e2;
    ee(e2, n2, 67174409);
    return ie(e2, n2, t2, o2, r2, { type: "TemplateLiteral", expressions: [], quasis: [an(e2, n2, a2, i2, s2, l2, c2, true)] });
  }
  function rn(e2, n2, o2) {
    n2 = 33554432 ^ (33554432 | n2);
    const { tokenValue: r2, tokenRaw: a2, tokenIndex: i2, tokenLine: s2, tokenColumn: l2 } = e2;
    ee(e2, -16385 & n2 | 8192, 67174408);
    const c2 = [an(e2, n2, r2, a2, i2, s2, l2, false)], u2 = [Fe(e2, -16385 & n2, o2, 0, 1, e2.tokenIndex, e2.tokenLine, e2.tokenColumn)];
    for (1074790415 !== e2.getToken() && t(e2, 83); 67174409 !== e2.setToken(D(e2, n2), true); ) {
      const { tokenValue: r3, tokenRaw: a3, tokenIndex: i3, tokenLine: s3, tokenColumn: l3 } = e2;
      ee(e2, -16385 & n2 | 8192, 67174408), c2.push(an(e2, n2, r3, a3, i3, s3, l3, false)), u2.push(Fe(e2, n2, o2, 0, 1, e2.tokenIndex, e2.tokenLine, e2.tokenColumn)), 1074790415 !== e2.getToken() && t(e2, 83);
    }
    {
      const { tokenValue: t2, tokenRaw: o3, tokenIndex: r3, tokenLine: a3, tokenColumn: i3 } = e2;
      ee(e2, n2, 67174409), c2.push(an(e2, n2, t2, o3, r3, a3, i3, true));
    }
    return ie(e2, n2, i2, s2, l2, { type: "TemplateLiteral", expressions: u2, quasis: c2 });
  }
  function an(e2, n2, t2, o2, r2, a2, i2, s2) {
    const l2 = ie(e2, n2, r2, a2, i2, { type: "TemplateElement", value: { cooked: t2, raw: o2 }, tail: s2 }), c2 = s2 ? 1 : 2;
    return 2 & n2 && (l2.start += 1, l2.range[0] += 1, l2.end -= c2, l2.range[1] -= c2), 4 & n2 && (l2.loc.start.column += 1, l2.loc.end.column -= c2), l2;
  }
  function sn(e2, n2, t2, o2, r2, a2) {
    ee(e2, 8192 | (n2 = 33554432 ^ (33554432 | n2)), 14);
    const i2 = Oe(e2, n2, t2, 1, 0, e2.tokenIndex, e2.tokenLine, e2.tokenColumn);
    return e2.assignable = 1, ie(e2, n2, o2, r2, a2, { type: "SpreadElement", argument: i2 });
  }
  function ln(e2, n2, t2, o2) {
    J(e2, 8192 | n2);
    const r2 = [];
    if (16 === e2.getToken()) return J(e2, 16384 | n2), r2;
    for (; 16 !== e2.getToken() && (14 === e2.getToken() ? r2.push(sn(e2, n2, t2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn)) : r2.push(Oe(e2, n2, t2, 1, o2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn)), 18 === e2.getToken()) && (J(e2, 8192 | n2), 16 !== e2.getToken()); ) ;
    return ee(e2, 16384 | n2, 16), r2;
  }
  function cn(e2, n2) {
    const { tokenValue: t2, tokenIndex: o2, tokenLine: r2, tokenColumn: a2 } = e2, i2 = "await" === t2 && !(-2147483648 & e2.getToken());
    return J(e2, n2 | (i2 ? 8192 : 0)), ie(e2, n2, o2, r2, a2, { type: "Identifier", name: t2 });
  }
  function un(e2, n2) {
    const { tokenValue: t2, tokenRaw: o2, tokenIndex: r2, tokenLine: a2, tokenColumn: i2 } = e2;
    return 134283388 === e2.getToken() ? tn(e2, n2, r2, a2, i2) : (J(e2, n2), e2.assignable = 2, ie(e2, n2, r2, a2, i2, 128 & n2 ? { type: "Literal", value: t2, raw: o2 } : { type: "Literal", value: t2 }));
  }
  function dn(e2, n2, o2, r2, a2, i2, s2, l2, c2, u2, d2) {
    J(e2, 8192 | n2);
    const g2 = i2 ? K(e2, n2, 8391476) : 0;
    let k2, p2 = null, f2 = o2 ? { parent: void 0, type: 2 } : void 0;
    if (67174411 === e2.getToken()) 1 & s2 || t(e2, 39, "Function");
    else {
      const r3 = !(4 & a2) || 2048 & n2 && 512 & n2 ? 64 | (l2 ? 1024 : 0) | (g2 ? 1024 : 0) : 4;
      oe(e2, n2, e2.getToken()), o2 && (4 & r3 ? ke(e2, n2, o2, e2.tokenValue, r3) : ge(e2, n2, o2, e2.tokenValue, r3, a2), f2 = ue(f2, 256), s2 && 2 & s2 && fe(e2, e2.tokenValue)), k2 = e2.getToken(), 143360 & e2.getToken() ? p2 = cn(e2, n2) : t(e2, 30, N[255 & e2.getToken()]);
    }
    const m2 = 7274496;
    n2 = (n2 | m2) ^ m2 | 16777216 | (l2 ? 524288 : 0) | (g2 ? 262144 : 0) | (g2 ? 0 : 67108864), o2 && (f2 = ue(f2, 512));
    const b2 = 268471296;
    return ie(e2, n2, c2, u2, d2, { type: "FunctionDeclaration", id: p2, params: vn(e2, -268435457 & n2 | 2097152, f2, r2, 0, 1), body: ze(e2, 9437184 | (n2 | b2) ^ b2, o2 ? ue(f2, 128) : f2, r2, 8, k2, f2?.scopeError), async: 1 === l2, generator: 1 === g2 });
  }
  function gn(e2, n2, t2, o2, r2, a2, i2, s2) {
    J(e2, 8192 | n2);
    const l2 = K(e2, n2, 8391476), c2 = (o2 ? 524288 : 0) | (l2 ? 262144 : 0);
    let u2, d2 = null, g2 = 16 & n2 ? { parent: void 0, type: 2 } : void 0;
    const k2 = 275709952;
    143360 & e2.getToken() && (oe(e2, (n2 | k2) ^ k2 | c2, e2.getToken()), g2 && (g2 = ue(g2, 256)), u2 = e2.getToken(), d2 = cn(e2, n2)), n2 = (n2 | k2) ^ k2 | 16777216 | c2 | (l2 ? 0 : 67108864), g2 && (g2 = ue(g2, 512));
    const p2 = vn(e2, -268435457 & n2 | 2097152, g2, t2, r2, 1), f2 = ze(e2, 9437184 | -33594369 & n2, g2 ? ue(g2, 128) : g2, t2, 0, u2, g2?.scopeError);
    return e2.assignable = 2, ie(e2, n2, a2, i2, s2, { type: "FunctionExpression", id: d2, params: p2, body: f2, async: 1 === o2, generator: 1 === l2 });
  }
  function kn(e2, n2, o2, r2, a2, i2, s2, l2, c2, u2, d2, g2) {
    J(e2, 8192 | n2);
    const k2 = [];
    let p2 = 0;
    for (n2 = 33554432 ^ (33554432 | n2); 20 !== e2.getToken(); ) if (Q(e2, 8192 | n2, 18)) k2.push(null);
    else {
      let a3;
      const { tokenIndex: u3, tokenLine: d3, tokenColumn: g3, tokenValue: f3 } = e2, m2 = e2.getToken();
      if (143360 & m2) if (a3 = Ye(e2, n2, r2, l2, 0, 1, i2, 1, u3, d3, g3), 1077936155 === e2.getToken()) {
        2 & e2.assignable && t(e2, 26), J(e2, 8192 | n2), o2 && de(e2, n2, o2, f3, l2, c2);
        const k3 = Oe(e2, n2, r2, 1, i2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn);
        a3 = ie(e2, n2, u3, d3, g3, s2 ? { type: "AssignmentPattern", left: a3, right: k3 } : { type: "AssignmentExpression", operator: "=", left: a3, right: k3 }), p2 |= 256 & e2.destructible ? 256 : 128 & e2.destructible ? 128 : 0;
      } else 18 === e2.getToken() || 20 === e2.getToken() ? (2 & e2.assignable ? p2 |= 16 : o2 && de(e2, n2, o2, f3, l2, c2), p2 |= 256 & e2.destructible ? 256 : 128 & e2.destructible ? 128 : 0) : (p2 |= 1 & l2 ? 32 : 2 & l2 ? 0 : 16, a3 = _e(e2, n2, r2, a3, i2, 0, u3, d3, g3), 18 !== e2.getToken() && 20 !== e2.getToken() ? (1077936155 !== e2.getToken() && (p2 |= 16), a3 = je(e2, n2, r2, i2, s2, u3, d3, g3, a3)) : 1077936155 !== e2.getToken() && (p2 |= 2 & e2.assignable ? 16 : 32));
      else 2097152 & m2 ? (a3 = 2162700 === e2.getToken() ? bn(e2, n2, o2, r2, 0, i2, s2, l2, c2, u3, d3, g3) : kn(e2, n2, o2, r2, 0, i2, s2, l2, c2, u3, d3, g3), p2 |= e2.destructible, e2.assignable = 16 & e2.destructible ? 2 : 1, 18 === e2.getToken() || 20 === e2.getToken() ? 2 & e2.assignable && (p2 |= 16) : 8 & e2.destructible ? t(e2, 71) : (a3 = _e(e2, n2, r2, a3, i2, 0, u3, d3, g3), p2 = 2 & e2.assignable ? 16 : 0, 18 !== e2.getToken() && 20 !== e2.getToken() ? a3 = je(e2, n2, r2, i2, s2, u3, d3, g3, a3) : 1077936155 !== e2.getToken() && (p2 |= 2 & e2.assignable ? 16 : 32))) : 14 === m2 ? (a3 = fn(e2, n2, o2, r2, 20, l2, c2, 0, i2, s2, u3, d3, g3), p2 |= e2.destructible, 18 !== e2.getToken() && 20 !== e2.getToken() && t(e2, 30, N[255 & e2.getToken()])) : (a3 = Xe(e2, n2, r2, 1, 0, 1, u3, d3, g3), 18 !== e2.getToken() && 20 !== e2.getToken() ? (a3 = je(e2, n2, r2, i2, s2, u3, d3, g3, a3), 3 & l2 || 67174411 !== m2 || (p2 |= 16)) : 2 & e2.assignable ? p2 |= 16 : 67174411 === m2 && (p2 |= 1 & e2.assignable && 3 & l2 ? 32 : 16));
      if (k2.push(a3), !Q(e2, 8192 | n2, 18)) break;
      if (20 === e2.getToken()) break;
    }
    ee(e2, n2, 20);
    const f2 = ie(e2, n2, u2, d2, g2, { type: s2 ? "ArrayPattern" : "ArrayExpression", elements: k2 });
    return !a2 && 4194304 & e2.getToken() ? pn(e2, n2, r2, p2, i2, s2, u2, d2, g2, f2) : (e2.destructible = p2, f2);
  }
  function pn(e2, n2, o2, r2, a2, i2, s2, l2, c2, u2) {
    1077936155 !== e2.getToken() && t(e2, 26), J(e2, 8192 | n2), 16 & r2 && t(e2, 26), i2 || ne(e2, u2);
    const { tokenIndex: d2, tokenLine: g2, tokenColumn: k2 } = e2, p2 = Oe(e2, n2, o2, 1, a2, d2, g2, k2);
    return e2.destructible = 72 ^ (72 | r2) | (128 & e2.destructible ? 128 : 0) | (256 & e2.destructible ? 256 : 0), ie(e2, n2, s2, l2, c2, i2 ? { type: "AssignmentPattern", left: u2, right: p2 } : { type: "AssignmentExpression", left: u2, operator: "=", right: p2 });
  }
  function fn(e2, n2, o2, r2, a2, i2, s2, l2, c2, u2, d2, g2, k2) {
    J(e2, 8192 | n2);
    let p2 = null, f2 = 0;
    const { tokenValue: m2, tokenIndex: b2, tokenLine: h2, tokenColumn: x2 } = e2;
    let T2 = e2.getToken();
    if (143360 & T2) e2.assignable = 1, p2 = Ye(e2, n2, r2, i2, 0, 1, c2, 1, b2, h2, x2), T2 = e2.getToken(), p2 = _e(e2, n2, r2, p2, c2, 0, b2, h2, x2), 18 !== e2.getToken() && e2.getToken() !== a2 && (2 & e2.assignable && 1077936155 === e2.getToken() && t(e2, 71), f2 |= 16, p2 = je(e2, n2, r2, c2, u2, b2, h2, x2, p2)), 2 & e2.assignable ? f2 |= 16 : T2 === a2 || 18 === T2 ? o2 && de(e2, n2, o2, m2, i2, s2) : f2 |= 32, f2 |= 128 & e2.destructible ? 128 : 0;
    else if (T2 === a2) t(e2, 41);
    else {
      if (!(2097152 & T2)) {
        f2 |= 32, p2 = Xe(e2, n2, r2, 1, c2, 1, e2.tokenIndex, e2.tokenLine, e2.tokenColumn);
        const { tokenIndex: o3, tokenLine: i3, tokenColumn: s3 } = e2, l3 = e2.getToken();
        return 1077936155 === l3 ? (2 & e2.assignable && t(e2, 26), p2 = je(e2, n2, r2, c2, u2, o3, i3, s3, p2), f2 |= 16) : (18 === l3 ? f2 |= 16 : l3 !== a2 && (p2 = je(e2, n2, r2, c2, u2, o3, i3, s3, p2)), f2 |= 1 & e2.assignable ? 32 : 16), e2.destructible = f2, e2.getToken() !== a2 && 18 !== e2.getToken() && t(e2, 161), ie(e2, n2, d2, g2, k2, { type: u2 ? "RestElement" : "SpreadElement", argument: p2 });
      }
      p2 = 2162700 === e2.getToken() ? bn(e2, n2, o2, r2, 1, c2, u2, i2, s2, b2, h2, x2) : kn(e2, n2, o2, r2, 1, c2, u2, i2, s2, b2, h2, x2), T2 = e2.getToken(), 1077936155 !== T2 && T2 !== a2 && 18 !== T2 ? (8 & e2.destructible && t(e2, 71), p2 = _e(e2, n2, r2, p2, c2, 0, b2, h2, x2), f2 |= 2 & e2.assignable ? 16 : 0, 4194304 & ~e2.getToken() ? (8388608 & ~e2.getToken() || (p2 = Me(e2, n2, r2, 1, b2, h2, x2, 4, T2, p2)), Q(e2, 8192 | n2, 22) && (p2 = He(e2, n2, r2, p2, b2, h2, x2)), f2 |= 2 & e2.assignable ? 16 : 32) : (1077936155 !== e2.getToken() && (f2 |= 16), p2 = je(e2, n2, r2, c2, u2, b2, h2, x2, p2))) : f2 |= 1074790415 === a2 && 1077936155 !== T2 ? 16 : e2.destructible;
    }
    if (e2.getToken() !== a2) if (1 & i2 && (f2 |= l2 ? 16 : 32), Q(e2, 8192 | n2, 1077936155)) {
      16 & f2 && t(e2, 26), ne(e2, p2);
      const o3 = Oe(e2, n2, r2, 1, c2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn);
      p2 = ie(e2, n2, b2, h2, x2, u2 ? { type: "AssignmentPattern", left: p2, right: o3 } : { type: "AssignmentExpression", left: p2, operator: "=", right: o3 }), f2 = 16;
    } else f2 |= 16;
    return e2.destructible = f2, ie(e2, n2, d2, g2, k2, { type: u2 ? "RestElement" : "SpreadElement", argument: p2 });
  }
  function mn(e2, n2, r2, a2, i2, s2, l2, c2) {
    const u2 = 2883584 | (64 & a2 ? 0 : 4325376);
    let d2 = 16 & (n2 = 25231360 | ((n2 | u2) ^ u2 | (8 & a2 ? 262144 : 0) | (16 & a2 ? 524288 : 0) | (64 & a2 ? 4194304 : 0))) ? ue({ parent: void 0, type: 2 }, 512) : void 0;
    const g2 = function(e3, n3, r3, a3, i3, s3, l3) {
      ee(e3, n3, 67174411);
      const c3 = [];
      if (e3.flags = 128 ^ (128 | e3.flags), 16 === e3.getToken()) return 512 & i3 && t(e3, 37, "Setter", "one", ""), J(e3, n3), c3;
      256 & i3 && t(e3, 37, "Getter", "no", "s");
      512 & i3 && 14 === e3.getToken() && t(e3, 38);
      n3 = 33554432 ^ (33554432 | n3);
      let u3 = 0, d3 = 0;
      for (; 18 !== e3.getToken(); ) {
        let o2 = null;
        const { tokenIndex: g3, tokenLine: k2, tokenColumn: p2 } = e3;
        if (143360 & e3.getToken() ? (256 & n3 || (36864 & ~e3.getToken() || (e3.flags |= 256), 537079808 & ~e3.getToken() || (e3.flags |= 512)), o2 = Un(e3, n3, r3, 1 | i3, 0, g3, k2, p2)) : (2162700 === e3.getToken() ? o2 = bn(e3, n3, r3, a3, 1, l3, 1, s3, 0, g3, k2, p2) : 69271571 === e3.getToken() ? o2 = kn(e3, n3, r3, a3, 1, l3, 1, s3, 0, g3, k2, p2) : 14 === e3.getToken() && (o2 = fn(e3, n3, r3, a3, 16, s3, 0, 0, l3, 1, g3, k2, p2)), d3 = 1, 48 & e3.destructible && t(e3, 50)), 1077936155 === e3.getToken()) {
          J(e3, 8192 | n3), d3 = 1;
          o2 = ie(e3, n3, g3, k2, p2, { type: "AssignmentPattern", left: o2, right: Oe(e3, n3, a3, 1, 0, e3.tokenIndex, e3.tokenLine, e3.tokenColumn) });
        }
        if (u3++, c3.push(o2), !Q(e3, n3, 18)) break;
        if (16 === e3.getToken()) break;
      }
      512 & i3 && 1 !== u3 && t(e3, 37, "Setter", "one", "");
      r3 && r3.scopeError && o(r3.scopeError);
      d3 && (e3.flags |= 128);
      return ee(e3, n3, 16), c3;
    }(e2, -268435457 & n2 | 2097152, d2, r2, a2, 1, i2);
    d2 && (d2 = ue(d2, 128));
    return ie(e2, n2, s2, l2, c2, { type: "FunctionExpression", params: g2, body: ze(e2, 9437184 | -301992961 & n2, d2, r2, 0, void 0, d2?.parent?.scopeError), async: (16 & a2) > 0, generator: (8 & a2) > 0, id: null });
  }
  function bn(e2, n2, o2, a2, i2, s2, l2, c2, u2, d2, g2, k2) {
    J(e2, n2);
    const p2 = [];
    let f2 = 0, m2 = 0;
    for (n2 = 33554432 ^ (33554432 | n2); 1074790415 !== e2.getToken(); ) {
      const { tokenValue: i3, tokenLine: d3, tokenColumn: g3, tokenIndex: k3 } = e2, b3 = e2.getToken();
      if (14 === b3) p2.push(fn(e2, n2, o2, a2, 1074790415, c2, u2, 0, s2, l2, k3, d3, g3));
      else {
        let h2, x2 = 0, T2 = null;
        if (143360 & e2.getToken() || -2147483528 === e2.getToken() || -2147483527 === e2.getToken()) if (-2147483527 === e2.getToken() && (f2 |= 16), T2 = cn(e2, n2), 18 === e2.getToken() || 1074790415 === e2.getToken() || 1077936155 === e2.getToken()) if (x2 |= 4, 256 & n2 && !(537079808 & ~b3) ? f2 |= 16 : te(e2, n2, c2, b3, 0), o2 && de(e2, n2, o2, i3, c2, u2), Q(e2, 8192 | n2, 1077936155)) {
          f2 |= 8;
          const t2 = Oe(e2, n2, a2, 1, s2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn);
          f2 |= 256 & e2.destructible ? 256 : 128 & e2.destructible ? 128 : 0, h2 = ie(e2, n2, k3, d3, g3, { type: "AssignmentPattern", left: 134217728 & n2 ? Object.assign({}, T2) : T2, right: t2 });
        } else f2 |= (209006 === b3 ? 128 : 0) | (-2147483528 === b3 ? 16 : 0), h2 = 134217728 & n2 ? Object.assign({}, T2) : T2;
        else if (Q(e2, 8192 | n2, 21)) {
          const { tokenIndex: r2, tokenLine: d4, tokenColumn: g4 } = e2;
          if ("__proto__" === i3 && m2++, 143360 & e2.getToken()) {
            const t2 = e2.getToken(), i4 = e2.tokenValue;
            h2 = Ye(e2, n2, a2, c2, 0, 1, s2, 1, r2, d4, g4);
            const k4 = e2.getToken();
            h2 = _e(e2, n2, a2, h2, s2, 0, r2, d4, g4), 18 === e2.getToken() || 1074790415 === e2.getToken() ? 1077936155 === k4 || 1074790415 === k4 || 18 === k4 ? (f2 |= 128 & e2.destructible ? 128 : 0, 2 & e2.assignable ? f2 |= 16 : !o2 || 143360 & ~t2 || de(e2, n2, o2, i4, c2, u2)) : f2 |= 1 & e2.assignable ? 32 : 16 : 4194304 & ~e2.getToken() ? (f2 |= 16, 8388608 & ~e2.getToken() || (h2 = Me(e2, n2, a2, 1, r2, d4, g4, 4, k4, h2)), Q(e2, 8192 | n2, 22) && (h2 = He(e2, n2, a2, h2, r2, d4, g4))) : (2 & e2.assignable ? f2 |= 16 : 1077936155 !== k4 ? f2 |= 32 : o2 && de(e2, n2, o2, i4, c2, u2), h2 = je(e2, n2, a2, s2, l2, r2, d4, g4, h2));
          } else 2097152 & ~e2.getToken() ? (h2 = Xe(e2, n2, a2, 1, s2, 1, r2, d4, g4), f2 |= 1 & e2.assignable ? 32 : 16, 18 === e2.getToken() || 1074790415 === e2.getToken() ? 2 & e2.assignable && (f2 |= 16) : (h2 = _e(e2, n2, a2, h2, s2, 0, r2, d4, g4), f2 = 2 & e2.assignable ? 16 : 0, 18 !== e2.getToken() && 1074790415 !== b3 && (1077936155 !== e2.getToken() && (f2 |= 16), h2 = je(e2, n2, a2, s2, l2, r2, d4, g4, h2)))) : (h2 = 69271571 === e2.getToken() ? kn(e2, n2, o2, a2, 0, s2, l2, c2, u2, r2, d4, g4) : bn(e2, n2, o2, a2, 0, s2, l2, c2, u2, r2, d4, g4), f2 = e2.destructible, e2.assignable = 16 & f2 ? 2 : 1, 18 === e2.getToken() || 1074790415 === e2.getToken() ? 2 & e2.assignable && (f2 |= 16) : 8 & e2.destructible ? t(e2, 71) : (h2 = _e(e2, n2, a2, h2, s2, 0, r2, d4, g4), f2 = 2 & e2.assignable ? 16 : 0, 4194304 & ~e2.getToken() ? (8388608 & ~e2.getToken() || (h2 = Me(e2, n2, a2, 1, r2, d4, g4, 4, b3, h2)), Q(e2, 8192 | n2, 22) && (h2 = He(e2, n2, a2, h2, r2, d4, g4)), f2 |= 2 & e2.assignable ? 16 : 32) : h2 = Je(e2, n2, a2, s2, l2, r2, d4, g4, h2)));
        } else 69271571 === e2.getToken() ? (f2 |= 16, 209005 === b3 && (x2 |= 16), x2 |= 2 | (209008 === b3 ? 256 : 209009 === b3 ? 512 : 1), T2 = hn(e2, n2, a2, s2), f2 |= e2.assignable, h2 = mn(e2, n2, a2, x2, s2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn)) : 143360 & e2.getToken() ? (f2 |= 16, -2147483528 === b3 && t(e2, 95), 209005 === b3 ? (1 & e2.flags && t(e2, 132), x2 |= 17) : 209008 === b3 ? x2 |= 256 : 209009 === b3 ? x2 |= 512 : t(e2, 0), T2 = cn(e2, n2), h2 = mn(e2, n2, a2, x2, s2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn)) : 67174411 === e2.getToken() ? (f2 |= 16, x2 |= 1, h2 = mn(e2, n2, a2, x2, s2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn)) : 8391476 === e2.getToken() ? (f2 |= 16, 209008 === b3 ? t(e2, 42) : 209009 === b3 ? t(e2, 43) : 209005 !== b3 && t(e2, 30, N[52]), J(e2, n2), x2 |= 9 | (209005 === b3 ? 16 : 0), 143360 & e2.getToken() ? T2 = cn(e2, n2) : 134217728 & ~e2.getToken() ? 69271571 === e2.getToken() ? (x2 |= 2, T2 = hn(e2, n2, a2, s2), f2 |= e2.assignable) : t(e2, 30, N[255 & e2.getToken()]) : T2 = un(e2, n2), h2 = mn(e2, n2, a2, x2, s2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn)) : 134217728 & ~e2.getToken() ? t(e2, 133) : (209005 === b3 && (x2 |= 16), x2 |= 209008 === b3 ? 256 : 209009 === b3 ? 512 : 1, f2 |= 16, T2 = un(e2, n2), h2 = mn(e2, n2, a2, x2, s2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn));
        else if (134217728 & ~e2.getToken()) if (69271571 === e2.getToken()) if (T2 = hn(e2, n2, a2, s2), f2 |= 256 & e2.destructible ? 256 : 0, x2 |= 2, 21 === e2.getToken()) {
          J(e2, 8192 | n2);
          const { tokenIndex: r2, tokenLine: i4, tokenColumn: d4, tokenValue: g4 } = e2, k4 = e2.getToken();
          if (143360 & e2.getToken()) {
            h2 = Ye(e2, n2, a2, c2, 0, 1, s2, 1, r2, i4, d4);
            const t2 = e2.getToken();
            h2 = _e(e2, n2, a2, h2, s2, 0, r2, i4, d4), 4194304 & ~e2.getToken() ? 18 === e2.getToken() || 1074790415 === e2.getToken() ? 1077936155 === t2 || 1074790415 === t2 || 18 === t2 ? 2 & e2.assignable ? f2 |= 16 : !o2 || 143360 & ~k4 || de(e2, n2, o2, g4, c2, u2) : f2 |= 1 & e2.assignable ? 32 : 16 : (f2 |= 16, h2 = je(e2, n2, a2, s2, l2, r2, i4, d4, h2)) : (f2 |= 2 & e2.assignable ? 16 : 1077936155 === t2 ? 0 : 32, h2 = Je(e2, n2, a2, s2, l2, r2, i4, d4, h2));
          } else 2097152 & ~e2.getToken() ? (h2 = Xe(e2, n2, a2, 1, 0, 1, r2, i4, d4), f2 |= 1 & e2.assignable ? 32 : 16, 18 === e2.getToken() || 1074790415 === e2.getToken() ? 2 & e2.assignable && (f2 |= 16) : (h2 = _e(e2, n2, a2, h2, s2, 0, r2, i4, d4), f2 = 1 & e2.assignable ? 0 : 16, 18 !== e2.getToken() && 1074790415 !== e2.getToken() && (1077936155 !== e2.getToken() && (f2 |= 16), h2 = je(e2, n2, a2, s2, l2, r2, i4, d4, h2)))) : (h2 = 69271571 === e2.getToken() ? kn(e2, n2, o2, a2, 0, s2, l2, c2, u2, r2, i4, d4) : bn(e2, n2, o2, a2, 0, s2, l2, c2, u2, r2, i4, d4), f2 = e2.destructible, e2.assignable = 16 & f2 ? 2 : 1, 18 === e2.getToken() || 1074790415 === e2.getToken() ? 2 & e2.assignable && (f2 |= 16) : 8 & f2 ? t(e2, 62) : (h2 = _e(e2, n2, a2, h2, s2, 0, r2, i4, d4), f2 = 2 & e2.assignable ? 16 | f2 : 0, 4194304 & ~e2.getToken() ? (8388608 & ~e2.getToken() || (h2 = Me(e2, n2, a2, 1, r2, i4, d4, 4, b3, h2)), Q(e2, 8192 | n2, 22) && (h2 = He(e2, n2, a2, h2, r2, i4, d4)), f2 |= 2 & e2.assignable ? 16 : 32) : (1077936155 !== e2.getToken() && (f2 |= 16), h2 = Je(e2, n2, a2, s2, l2, r2, i4, d4, h2))));
        } else 67174411 === e2.getToken() ? (x2 |= 1, h2 = mn(e2, n2, a2, x2, s2, e2.tokenIndex, d3, g3), f2 = 16) : t(e2, 44);
        else if (8391476 === b3) if (ee(e2, 8192 | n2, 8391476), x2 |= 8, 143360 & e2.getToken()) {
          const t2 = e2.getToken();
          T2 = cn(e2, n2), x2 |= 1, 67174411 === e2.getToken() ? (f2 |= 16, h2 = mn(e2, n2, a2, x2, s2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn)) : r(e2.tokenIndex, e2.tokenLine, e2.tokenColumn, e2.index, e2.line, e2.column, 209005 === t2 ? 46 : 209008 === t2 || 209009 === e2.getToken() ? 45 : 47, N[255 & t2]);
        } else 134217728 & ~e2.getToken() ? 69271571 === e2.getToken() ? (f2 |= 16, x2 |= 3, T2 = hn(e2, n2, a2, s2), h2 = mn(e2, n2, a2, x2, s2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn)) : t(e2, 126) : (f2 |= 16, T2 = un(e2, n2), x2 |= 1, h2 = mn(e2, n2, a2, x2, s2, k3, d3, g3));
        else t(e2, 30, N[255 & b3]);
        else if (T2 = un(e2, n2), 21 === e2.getToken()) {
          ee(e2, 8192 | n2, 21);
          const { tokenIndex: t2, tokenLine: r2, tokenColumn: d4 } = e2;
          if ("__proto__" === i3 && m2++, 143360 & e2.getToken()) {
            h2 = Ye(e2, n2, a2, c2, 0, 1, s2, 1, t2, r2, d4);
            const { tokenValue: i4 } = e2, g4 = e2.getToken();
            h2 = _e(e2, n2, a2, h2, s2, 0, t2, r2, d4), 18 === e2.getToken() || 1074790415 === e2.getToken() ? 1077936155 === g4 || 1074790415 === g4 || 18 === g4 ? 2 & e2.assignable ? f2 |= 16 : o2 && de(e2, n2, o2, i4, c2, u2) : f2 |= 1 & e2.assignable ? 32 : 16 : 1077936155 === e2.getToken() ? (2 & e2.assignable && (f2 |= 16), h2 = je(e2, n2, a2, s2, l2, t2, r2, d4, h2)) : (f2 |= 16, h2 = je(e2, n2, a2, s2, l2, t2, r2, d4, h2));
          } else 2097152 & ~e2.getToken() ? (h2 = Xe(e2, n2, a2, 1, 0, 1, t2, r2, d4), f2 |= 1 & e2.assignable ? 32 : 16, 18 === e2.getToken() || 1074790415 === e2.getToken() ? 2 & e2.assignable && (f2 |= 16) : (h2 = _e(e2, n2, a2, h2, s2, 0, t2, r2, d4), f2 = 1 & e2.assignable ? 0 : 16, 18 !== e2.getToken() && 1074790415 !== e2.getToken() && (1077936155 !== e2.getToken() && (f2 |= 16), h2 = je(e2, n2, a2, s2, l2, t2, r2, d4, h2)))) : (h2 = 69271571 === e2.getToken() ? kn(e2, n2, o2, a2, 0, s2, l2, c2, u2, t2, r2, d4) : bn(e2, n2, o2, a2, 0, s2, l2, c2, u2, t2, r2, d4), f2 = e2.destructible, e2.assignable = 16 & f2 ? 2 : 1, 18 === e2.getToken() || 1074790415 === e2.getToken() ? 2 & e2.assignable && (f2 |= 16) : 8 & ~e2.destructible && (h2 = _e(e2, n2, a2, h2, s2, 0, t2, r2, d4), f2 = 2 & e2.assignable ? 16 : 0, 4194304 & ~e2.getToken() ? (8388608 & ~e2.getToken() || (h2 = Me(e2, n2, a2, 1, t2, r2, d4, 4, b3, h2)), Q(e2, 8192 | n2, 22) && (h2 = He(e2, n2, a2, h2, t2, r2, d4)), f2 |= 2 & e2.assignable ? 16 : 32) : h2 = Je(e2, n2, a2, s2, l2, t2, r2, d4, h2)));
        } else 67174411 === e2.getToken() ? (x2 |= 1, h2 = mn(e2, n2, a2, x2, s2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn), f2 = 16 | e2.assignable) : t(e2, 134);
        f2 |= 128 & e2.destructible ? 128 : 0, e2.destructible = f2, p2.push(ie(e2, n2, k3, d3, g3, { type: "Property", key: T2, value: h2, kind: 768 & x2 ? 512 & x2 ? "set" : "get" : "init", computed: (2 & x2) > 0, method: (1 & x2) > 0, shorthand: (4 & x2) > 0 }));
      }
      if (f2 |= e2.destructible, 18 !== e2.getToken()) break;
      J(e2, n2);
    }
    ee(e2, n2, 1074790415), m2 > 1 && (f2 |= 64);
    const b2 = ie(e2, n2, d2, g2, k2, { type: l2 ? "ObjectPattern" : "ObjectExpression", properties: p2 });
    return !i2 && 4194304 & e2.getToken() ? pn(e2, n2, a2, f2, s2, l2, d2, g2, k2, b2) : (e2.destructible = f2, b2);
  }
  function hn(e2, n2, t2, o2) {
    J(e2, 8192 | n2);
    const r2 = Oe(e2, 33554432 ^ (33554432 | n2), t2, 1, o2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn);
    return ee(e2, n2, 20), r2;
  }
  function xn(e2, n2, t2, o2, r2, a2) {
    const { tokenValue: i2 } = e2;
    let s2 = 0, l2 = 0;
    537079808 & ~e2.getToken() ? 36864 & ~e2.getToken() || (l2 = 1) : s2 = 1;
    const c2 = cn(e2, n2);
    if (e2.assignable = 1, 10 === e2.getToken()) {
      let u2;
      return 16 & n2 && (u2 = le(e2, n2, i2)), s2 && (e2.flags |= 128), l2 && (e2.flags |= 256), Cn(e2, n2, u2, t2, [c2], 0, o2, r2, a2);
    }
    return c2;
  }
  function Tn(e2, n2, o2, r2, a2, i2, s2, l2, c2, u2, d2) {
    s2 || t(e2, 57), i2 && t(e2, 51), e2.flags &= -129;
    return Cn(e2, n2, 16 & n2 ? le(e2, n2, r2) : void 0, o2, [a2], l2, c2, u2, d2);
  }
  function yn(e2, n2, o2, r2, a2, i2, s2, l2, c2, u2) {
    i2 || t(e2, 57);
    for (let n3 = 0; n3 < a2.length; ++n3) ne(e2, a2[n3]);
    return Cn(e2, n2, o2, r2, a2, s2, l2, c2, u2);
  }
  function Cn(e2, n2, r2, a2, i2, s2, l2, c2, u2) {
    1 & e2.flags && t(e2, 48), ee(e2, 8192 | n2, 10);
    const d2 = 271319040;
    n2 = (n2 | d2) ^ d2 | (s2 ? 524288 : 0);
    const g2 = 2162700 !== e2.getToken();
    let k2;
    if (r2 && r2.scopeError && o(r2.scopeError), g2) e2.flags = 4928 ^ (4928 | e2.flags), k2 = Oe(e2, n2, a2, 1, 0, e2.tokenIndex, e2.tokenLine, e2.tokenColumn);
    else {
      r2 && (r2 = ue(r2, 128));
      const o2 = 33557504;
      switch (k2 = ze(e2, (n2 | o2) ^ o2 | 1048576, r2, a2, 16, void 0, void 0), e2.getToken()) {
        case 69271571:
          1 & e2.flags || t(e2, 116);
          break;
        case 67108877:
        case 67174409:
        case 22:
          t(e2, 117);
        case 67174411:
          1 & e2.flags || t(e2, 116), e2.flags |= 1024;
      }
      8388608 & ~e2.getToken() || 1 & e2.flags || t(e2, 30, N[255 & e2.getToken()]), 33619968 & ~e2.getToken() || t(e2, 125);
    }
    return e2.assignable = 2, ie(e2, n2, l2, c2, u2, { type: "ArrowFunctionExpression", params: i2, body: k2, async: 1 === s2, expression: g2 });
  }
  function vn(e2, n2, r2, a2, i2, s2) {
    ee(e2, n2, 67174411), e2.flags = 128 ^ (128 | e2.flags);
    const l2 = [];
    if (Q(e2, n2, 16)) return l2;
    n2 = 33554432 ^ (33554432 | n2);
    let c2 = 0;
    for (; 18 !== e2.getToken(); ) {
      let o2;
      const { tokenIndex: u2, tokenLine: d2, tokenColumn: g2 } = e2, k2 = e2.getToken();
      if (143360 & k2 ? (256 & n2 || (36864 & ~k2 || (e2.flags |= 256), 537079808 & ~k2 || (e2.flags |= 512)), o2 = Un(e2, n2, r2, 1 | s2, 0, u2, d2, g2)) : (2162700 === k2 ? o2 = bn(e2, n2, r2, a2, 1, i2, 1, s2, 0, u2, d2, g2) : 69271571 === k2 ? o2 = kn(e2, n2, r2, a2, 1, i2, 1, s2, 0, u2, d2, g2) : 14 === k2 ? o2 = fn(e2, n2, r2, a2, 16, s2, 0, 0, i2, 1, u2, d2, g2) : t(e2, 30, N[255 & k2]), c2 = 1, 48 & e2.destructible && t(e2, 50)), 1077936155 === e2.getToken()) {
        J(e2, 8192 | n2), c2 = 1;
        o2 = ie(e2, n2, u2, d2, g2, { type: "AssignmentPattern", left: o2, right: Oe(e2, n2, a2, 1, i2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn) });
      }
      if (l2.push(o2), !Q(e2, n2, 18)) break;
      if (16 === e2.getToken()) break;
    }
    return c2 && (e2.flags |= 128), r2 && (c2 || 256 & n2) && r2.scopeError && o(r2.scopeError), ee(e2, n2, 16), l2;
  }
  function wn(e2, n2, t2, o2, r2, a2, i2, s2) {
    const l2 = e2.getToken();
    if (67108864 & l2) {
      if (67108877 === l2) {
        J(e2, 67108864 | n2), e2.assignable = 1;
        return wn(e2, n2, t2, ie(e2, n2, a2, i2, s2, { type: "MemberExpression", object: o2, computed: false, property: $e(e2, n2, t2) }), 0, a2, i2, s2);
      }
      if (69271571 === l2) {
        J(e2, 8192 | n2);
        const { tokenIndex: l3, tokenLine: c2, tokenColumn: u2 } = e2, d2 = Fe(e2, n2, t2, r2, 1, l3, c2, u2);
        return ee(e2, n2, 20), e2.assignable = 1, wn(e2, n2, t2, ie(e2, n2, a2, i2, s2, { type: "MemberExpression", object: o2, computed: true, property: d2 }), 0, a2, i2, s2);
      }
      if (67174408 === l2 || 67174409 === l2) return e2.assignable = 2, wn(e2, n2, t2, ie(e2, n2, a2, i2, s2, { type: "TaggedTemplateExpression", tag: o2, quasi: 67174408 === e2.getToken() ? rn(e2, 16384 | n2, t2) : on(e2, 16384 | n2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn) }), 0, a2, i2, s2);
    }
    return o2;
  }
  function Ln(e2, n2, o2, r2, a2, i2, s2) {
    return 209006 === e2.getToken() && t(e2, 31), 262400 & n2 && 241771 === e2.getToken() && t(e2, 32), be(e2, n2, e2.getToken()), 36864 & ~e2.getToken() || (e2.flags |= 256), Tn(e2, -268435457 & n2 | 524288, o2, e2.tokenValue, cn(e2, n2), 0, r2, 1, a2, i2, s2);
  }
  function In(e2, n2, o2, r2, a2, i2, s2, l2, c2, u2, d2) {
    J(e2, 8192 | n2);
    const g2 = 16 & n2 ? ue({ parent: void 0, type: 2 }, 1024) : void 0;
    if (Q(e2, n2 = 33554432 ^ (33554432 | n2), 16)) return 10 === e2.getToken() ? (1 & l2 && t(e2, 48), yn(e2, n2, g2, o2, [], a2, 1, c2, u2, d2)) : ie(e2, n2, c2, u2, d2, { type: "CallExpression", callee: r2, arguments: [] });
    let k2 = 0, p2 = null, f2 = 0;
    e2.destructible = 384 ^ (384 | e2.destructible);
    const m2 = [];
    for (; 16 !== e2.getToken(); ) {
      const { tokenIndex: a3, tokenLine: l3, tokenColumn: b2 } = e2, h2 = e2.getToken();
      if (143360 & h2) g2 && ge(e2, n2, g2, e2.tokenValue, i2, 0), 537079808 & ~h2 ? 36864 & ~h2 || (e2.flags |= 256) : e2.flags |= 512, p2 = Ye(e2, n2, o2, i2, 0, 1, 1, 1, a3, l3, b2), 16 === e2.getToken() || 18 === e2.getToken() ? 2 & e2.assignable && (k2 |= 16, f2 = 1) : (1077936155 === e2.getToken() ? f2 = 1 : k2 |= 16, p2 = _e(e2, n2, o2, p2, 1, 0, a3, l3, b2), 16 !== e2.getToken() && 18 !== e2.getToken() && (p2 = je(e2, n2, o2, 1, 0, a3, l3, b2, p2)));
      else if (2097152 & h2) p2 = 2162700 === h2 ? bn(e2, n2, g2, o2, 0, 1, 0, i2, s2, a3, l3, b2) : kn(e2, n2, g2, o2, 0, 1, 0, i2, s2, a3, l3, b2), k2 |= e2.destructible, f2 = 1, 16 !== e2.getToken() && 18 !== e2.getToken() && (8 & k2 && t(e2, 122), p2 = _e(e2, n2, o2, p2, 0, 0, a3, l3, b2), k2 |= 16, 8388608 & ~e2.getToken() || (p2 = Me(e2, n2, o2, 1, c2, u2, d2, 4, h2, p2)), Q(e2, 8192 | n2, 22) && (p2 = He(e2, n2, o2, p2, c2, u2, d2)));
      else {
        if (14 !== h2) {
          for (p2 = Oe(e2, n2, o2, 1, 0, a3, l3, b2), k2 = e2.assignable, m2.push(p2); Q(e2, 8192 | n2, 18); ) m2.push(Oe(e2, n2, o2, 1, 0, a3, l3, b2));
          return k2 |= e2.assignable, ee(e2, n2, 16), e2.destructible = 16 | k2, e2.assignable = 2, ie(e2, n2, c2, u2, d2, { type: "CallExpression", callee: r2, arguments: m2 });
        }
        p2 = fn(e2, n2, g2, o2, 16, i2, s2, 1, 1, 0, a3, l3, b2), k2 |= (16 === e2.getToken() ? 0 : 16) | e2.destructible, f2 = 1;
      }
      if (m2.push(p2), !Q(e2, 8192 | n2, 18)) break;
    }
    return ee(e2, n2, 16), k2 |= 256 & e2.destructible ? 256 : 128 & e2.destructible ? 128 : 0, 10 === e2.getToken() ? (48 & k2 && t(e2, 27), (1 & e2.flags || 1 & l2) && t(e2, 48), 128 & k2 && t(e2, 31), 262400 & n2 && 256 & k2 && t(e2, 32), f2 && (e2.flags |= 128), yn(e2, 524288 | n2, g2, o2, m2, a2, 1, c2, u2, d2)) : (64 & k2 && t(e2, 63), 8 & k2 && t(e2, 62), e2.assignable = 2, ie(e2, n2, c2, u2, d2, { type: "CallExpression", callee: r2, arguments: m2 }));
  }
  function qn(e2, n2, o2, r2, a2, i2, s2, l2) {
    let c2 = En(e2, n2, r2);
    c2.length && (i2 = e2.tokenIndex, s2 = e2.tokenLine, l2 = e2.tokenColumn), e2.leadingDecorators.length && (e2.leadingDecorators.push(...c2), c2 = e2.leadingDecorators, e2.leadingDecorators = []), J(e2, n2 = 4194304 ^ (4194560 | n2));
    let u2 = null, d2 = null;
    const { tokenValue: g2 } = e2;
    4096 & e2.getToken() && 20565 !== e2.getToken() ? (re(e2, n2, e2.getToken()) && t(e2, 118), 537079808 & ~e2.getToken() || t(e2, 119), o2 && (ge(e2, n2, o2, g2, 32, 0), a2 && 2 & a2 && fe(e2, g2)), u2 = cn(e2, n2)) : 1 & a2 || t(e2, 39, "Class");
    let k2 = n2;
    Q(e2, 8192 | n2, 20565) ? (d2 = Xe(e2, n2, r2, 0, 0, 0, e2.tokenIndex, e2.tokenLine, e2.tokenColumn), k2 |= 131072) : k2 = 131072 ^ (131072 | k2);
    return ie(e2, n2, i2, s2, l2, { type: "ClassDeclaration", id: u2, superClass: d2, body: An(e2, k2, n2, o2, r2, 2, 8, 0), ...1 & n2 ? { decorators: c2 } : null });
  }
  function En(e2, n2, t2) {
    const o2 = [];
    if (1 & n2) for (; 132 === e2.getToken(); ) o2.push(Sn(e2, n2, t2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn));
    return o2;
  }
  function Sn(e2, n2, t2, o2, r2, a2) {
    J(e2, 8192 | n2);
    let i2 = Ye(e2, n2, t2, 2, 0, 1, 0, 1, o2, r2, a2);
    return i2 = _e(e2, n2, t2, i2, 0, 0, o2, r2, a2), ie(e2, n2, o2, r2, a2, { type: "Decorator", expression: i2 });
  }
  function An(e2, o2, r2, a2, i2, s2, l2, c2) {
    const { tokenIndex: u2, tokenLine: d2, tokenColumn: g2 } = e2, k2 = 16 & o2 ? { parent: i2, refs: /* @__PURE__ */ Object.create(null) } : void 0;
    ee(e2, 8192 | o2, 2162700);
    const p2 = 301989888;
    o2 = (o2 | p2) ^ p2;
    const f2 = 32 & e2.flags;
    e2.flags = 32 ^ (32 | e2.flags);
    const m2 = [];
    let b2;
    for (; 1074790415 !== e2.getToken(); ) {
      let n2 = 0;
      b2 = En(e2, o2, k2), n2 = b2.length, n2 > 0 && "constructor" === e2.tokenValue && t(e2, 109), 1074790415 === e2.getToken() && t(e2, 108), Q(e2, o2, 1074790417) ? n2 > 0 && t(e2, 120) : m2.push(Dn(e2, o2, a2, k2, r2, s2, b2, 0, c2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn));
    }
    return ee(e2, 8 & l2 ? 8192 | o2 : o2, 1074790415), k2 && function(e3) {
      for (const t2 in e3.refs) if (!pe(t2, e3)) {
        const { index: o3, line: r3, column: a3 } = e3.refs[t2][0];
        throw new n(o3, r3, a3, o3 + t2.length, r3, a3 + t2.length, 4, t2);
      }
    }(k2), e2.flags = -33 & e2.flags | f2, ie(e2, o2, u2, d2, g2, { type: "ClassBody", body: m2 });
  }
  function Dn(e2, n2, o2, r2, a2, i2, s2, l2, c2, u2, d2, g2) {
    let k2 = l2 ? 32 : 0, p2 = null;
    const { tokenIndex: f2, tokenLine: m2, tokenColumn: b2 } = e2, h2 = e2.getToken();
    if (176128 & h2 || -2147483528 === h2) switch (p2 = cn(e2, n2), h2) {
      case 36970:
        if (!l2 && 67174411 !== e2.getToken() && 1048576 & ~e2.getToken() && 1077936155 !== e2.getToken()) return Dn(e2, n2, o2, r2, a2, i2, s2, 1, c2, u2, d2, g2);
        break;
      case 209005:
        if (67174411 !== e2.getToken() && !(1 & e2.flags)) {
          if (!(1073741824 & ~e2.getToken())) return Rn(e2, n2, r2, p2, k2, s2, f2, m2, b2);
          k2 |= 16 | (K(e2, n2, 8391476) ? 8 : 0);
        }
        break;
      case 209008:
        if (67174411 !== e2.getToken()) {
          if (!(1073741824 & ~e2.getToken())) return Rn(e2, n2, r2, p2, k2, s2, f2, m2, b2);
          k2 |= 256;
        }
        break;
      case 209009:
        if (67174411 !== e2.getToken()) {
          if (!(1073741824 & ~e2.getToken())) return Rn(e2, n2, r2, p2, k2, s2, f2, m2, b2);
          k2 |= 512;
        }
        break;
      case 12402:
        if (67174411 !== e2.getToken() && !(1 & e2.flags)) {
          if (!(1073741824 & ~e2.getToken())) return Rn(e2, n2, r2, p2, k2, s2, f2, m2, b2);
          1 & n2 && (k2 |= 1024);
        }
    }
    else if (69271571 === h2) k2 |= 2, p2 = hn(e2, a2, r2, c2);
    else if (134217728 & ~h2) if (8391476 === h2) k2 |= 8, J(e2, n2);
    else if (130 === e2.getToken()) k2 |= 8192, p2 = Vn(e2, 4096 | n2, r2, 768, f2, m2, b2);
    else if (1073741824 & ~e2.getToken()) {
      if (l2 && 2162700 === h2) return function(e3, n3, t2, o3, r3, a3, i3) {
        t2 && (t2 = ue(t2, 2));
        const s3 = 1475584;
        n3 = 285802496 | (n3 | s3) ^ s3;
        const { body: l3 } = Ce(e3, n3, t2, o3, {}, r3, a3, i3);
        return ie(e3, n3, r3, a3, i3, { type: "StaticBlock", body: l3 });
      }(e2, 4096 | n2, o2, r2, f2, m2, b2);
      -2147483527 === h2 ? (p2 = cn(e2, n2), 67174411 !== e2.getToken() && t(e2, 30, N[255 & e2.getToken()])) : t(e2, 30, N[255 & e2.getToken()]);
    } else k2 |= 128;
    else p2 = un(e2, n2);
    if (1816 & k2 && (143360 & e2.getToken() || -2147483528 === e2.getToken() || -2147483527 === e2.getToken() ? p2 = cn(e2, n2) : 134217728 & ~e2.getToken() ? 69271571 === e2.getToken() ? (k2 |= 2, p2 = hn(e2, n2, r2, 0)) : 130 === e2.getToken() ? (k2 |= 8192, p2 = Vn(e2, n2, r2, k2, f2, m2, b2)) : t(e2, 135) : p2 = un(e2, n2)), 2 & k2 || ("constructor" === e2.tokenValue ? (1073741824 & ~e2.getToken() ? 32 & k2 || 67174411 !== e2.getToken() || (920 & k2 ? t(e2, 53, "accessor") : 131072 & n2 || (32 & e2.flags ? t(e2, 54) : e2.flags |= 32)) : t(e2, 129), k2 |= 64) : !(8192 & k2) && 32 & k2 && "prototype" === e2.tokenValue && t(e2, 52)), 1024 & k2 || 67174411 !== e2.getToken() && !(768 & k2)) return Rn(e2, n2, r2, p2, k2, s2, f2, m2, b2);
    return ie(e2, n2, u2, d2, g2, { type: "MethodDefinition", kind: !(32 & k2) && 64 & k2 ? "constructor" : 256 & k2 ? "get" : 512 & k2 ? "set" : "method", static: (32 & k2) > 0, computed: (2 & k2) > 0, key: p2, value: mn(e2, 4096 | n2, r2, k2, c2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn), ...1 & n2 ? { decorators: s2 } : null });
  }
  function Vn(e2, n2, o2, r2, a2, i2, s2) {
    J(e2, n2);
    const { tokenValue: l2 } = e2;
    return "constructor" === l2 && t(e2, 128), 16 & n2 && (o2 || t(e2, 4, l2), r2 ? function(e3, n3, o3, r3) {
      let a3 = 800 & r3;
      768 & a3 || (a3 |= 768);
      const i3 = n3["#" + o3];
      void 0 !== i3 && ((32 & i3) != (32 & a3) || i3 & a3 & 768) && t(e3, 146, o3), n3["#" + o3] = i3 ? i3 | a3 : a3;
    }(e2, o2, l2, r2) : function(e3, n3, t2) {
      n3.refs[t2] ??= [], n3.refs[t2].push({ index: e3.tokenIndex, line: e3.tokenLine, column: e3.tokenColumn });
    }(e2, o2, l2)), J(e2, n2), ie(e2, n2, a2, i2, s2, { type: "PrivateIdentifier", name: l2 });
  }
  function Rn(e2, n2, o2, r2, a2, i2, s2, l2, c2) {
    let u2 = null;
    if (8 & a2 && t(e2, 0), 1077936155 === e2.getToken()) {
      J(e2, 8192 | n2);
      const { tokenIndex: r3, tokenLine: i3, tokenColumn: s3 } = e2;
      537079927 === e2.getToken() && t(e2, 119);
      const l3 = 2883584 | (64 & a2 ? 0 : 4325376);
      u2 = Ye(e2, 4096 | (n2 = 16842752 | ((n2 | l3) ^ l3 | (8 & a2 ? 262144 : 0) | (16 & a2 ? 524288 : 0) | (64 & a2 ? 4194304 : 0))), o2, 2, 0, 1, 0, 1, r3, i3, s3), !(1073741824 & ~e2.getToken()) && 4194304 & ~e2.getToken() || (u2 = _e(e2, 4096 | n2, o2, u2, 0, 0, r3, i3, s3), u2 = je(e2, 4096 | n2, o2, 0, 0, r3, i3, s3, u2));
    }
    return Z(e2, n2), ie(e2, n2, s2, l2, c2, { type: 1024 & a2 ? "AccessorProperty" : "PropertyDefinition", key: r2, value: u2, static: (32 & a2) > 0, computed: (2 & a2) > 0, ...1 & n2 ? { decorators: i2 } : null });
  }
  function Nn(e2, n2, o2, r2, a2, i2, s2, l2, c2) {
    if (143360 & e2.getToken() || !(256 & n2) && -2147483527 === e2.getToken()) return Un(e2, n2, o2, a2, i2, s2, l2, c2);
    2097152 & ~e2.getToken() && t(e2, 30, N[255 & e2.getToken()]);
    const u2 = 69271571 === e2.getToken() ? kn(e2, n2, o2, r2, 1, 0, 1, a2, i2, s2, l2, c2) : bn(e2, n2, o2, r2, 1, 0, 1, a2, i2, s2, l2, c2);
    return 16 & e2.destructible && t(e2, 50), 32 & e2.destructible && t(e2, 50), u2;
  }
  function Un(e2, n2, o2, r2, a2, i2, s2, l2) {
    const { tokenValue: c2 } = e2, u2 = e2.getToken();
    return 256 & n2 && (537079808 & ~u2 ? 36864 & ~u2 && -2147483527 !== u2 || t(e2, 118) : t(e2, 119)), 20480 & ~u2 || t(e2, 102), 241771 === u2 && (262144 & n2 && t(e2, 32), 512 & n2 && t(e2, 111)), 73 == (255 & u2) && 24 & r2 && t(e2, 100), 209006 === u2 && (524288 & n2 && t(e2, 176), 512 & n2 && t(e2, 110)), J(e2, n2), o2 && de(e2, n2, o2, c2, r2, a2), ie(e2, n2, i2, s2, l2, { type: "Identifier", name: c2 });
  }
  function Pn(e2, n2, o2, r2, a2, i2, s2) {
    if (r2 || ee(e2, n2, 8456256), 8390721 === e2.getToken()) {
      const t2 = function(e3, n3, t3, o3, r3) {
        return $(e3, n3), ie(e3, n3, t3, o3, r3, { type: "JSXOpeningFragment" });
      }(e2, n2, a2, i2, s2), [l3, c3] = function(e3, n3, t3, o3) {
        const r3 = [];
        for (; ; ) {
          const a3 = On(e3, n3, t3, o3, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
          if ("JSXClosingFragment" === a3.type) return [r3, a3];
          r3.push(a3);
        }
      }(e2, n2, o2, r2);
      return ie(e2, n2, a2, i2, s2, { type: "JSXFragment", openingFragment: t2, children: l3, closingFragment: c3 });
    }
    8457014 === e2.getToken() && t(e2, 30, N[255 & e2.getToken()]);
    let l2 = null, c2 = [];
    const u2 = function(e3, n3, o3, r3, a3, i3, s3) {
      143360 & ~e3.getToken() && 4096 & ~e3.getToken() && t(e3, 0);
      const l3 = Fn(e3, n3, e3.tokenIndex, e3.tokenLine, e3.tokenColumn), c3 = function(e4, n4, t2) {
        const o4 = [];
        for (; 8457014 !== e4.getToken() && 8390721 !== e4.getToken() && 1048576 !== e4.getToken(); ) o4.push(Jn(e4, n4, t2, e4.tokenIndex, e4.tokenLine, e4.tokenColumn));
        return o4;
      }(e3, n3, o3), u3 = 8457014 === e3.getToken();
      u3 && ee(e3, n3, 8457014);
      8390721 !== e3.getToken() && t(e3, 25, N[65]);
      r3 || !u3 ? $(e3, n3) : J(e3, n3);
      return ie(e3, n3, a3, i3, s3, { type: "JSXOpeningElement", name: l3, attributes: c3, selfClosing: u3 });
    }(e2, n2, o2, r2, a2, i2, s2);
    if (!u2.selfClosing) {
      [c2, l2] = function(e3, n3, t2, o3) {
        const r3 = [];
        for (; ; ) {
          const a4 = Bn(e3, n3, t2, o3, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
          if ("JSXClosingElement" === a4.type) return [r3, a4];
          r3.push(a4);
        }
      }(e2, n2, o2, r2);
      const a3 = se(l2.name);
      se(u2.name) !== a3 && t(e2, 155, a3);
    }
    return ie(e2, n2, a2, i2, s2, { type: "JSXElement", children: c2, openingElement: u2, closingElement: l2 });
  }
  function Bn(e2, n2, o2, r2, a2, i2, s2) {
    return 137 === e2.getToken() ? Gn(e2, n2, a2, i2, s2) : 2162700 === e2.getToken() ? Mn(e2, n2, o2, 1, 0, a2, i2, s2) : 8456256 === e2.getToken() ? (J(e2, n2), 8457014 === e2.getToken() ? function(e3, n3, o3, r3, a3, i3) {
      ee(e3, n3, 8457014);
      const s3 = Fn(e3, n3, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
      return 8390721 !== e3.getToken() && t(e3, 25, N[65]), o3 ? $(e3, n3) : J(e3, n3), ie(e3, n3, r3, a3, i3, { type: "JSXClosingElement", name: s3 });
    }(e2, n2, r2, a2, i2, s2) : Pn(e2, n2, o2, 1, a2, i2, s2)) : void t(e2, 0);
  }
  function On(e2, n2, o2, r2, a2, i2, s2) {
    return 137 === e2.getToken() ? Gn(e2, n2, a2, i2, s2) : 2162700 === e2.getToken() ? Mn(e2, n2, o2, 1, 0, a2, i2, s2) : 8456256 === e2.getToken() ? (J(e2, n2), 8457014 === e2.getToken() ? function(e3, n3, o3, r3, a3, i3) {
      return ee(e3, n3, 8457014), 8390721 !== e3.getToken() && t(e3, 25, N[65]), o3 ? $(e3, n3) : J(e3, n3), ie(e3, n3, r3, a3, i3, { type: "JSXClosingFragment" });
    }(e2, n2, r2, a2, i2, s2) : Pn(e2, n2, o2, 1, a2, i2, s2)) : void t(e2, 0);
  }
  function Gn(e2, n2, t2, o2, r2) {
    J(e2, n2);
    const a2 = { type: "JSXText", value: e2.tokenValue };
    return 128 & n2 && (a2.raw = e2.tokenRaw), ie(e2, n2, t2, o2, r2, a2);
  }
  function Fn(e2, n2, t2, o2, r2) {
    Y(e2);
    let a2 = zn(e2, n2, t2, o2, r2);
    if (21 === e2.getToken()) return Hn(e2, n2, a2, t2, o2, r2);
    for (; Q(e2, n2, 67108877); ) Y(e2), a2 = jn(e2, n2, a2, t2, o2, r2);
    return a2;
  }
  function jn(e2, n2, t2, o2, r2, a2) {
    return ie(e2, n2, o2, r2, a2, { type: "JSXMemberExpression", object: t2, property: zn(e2, n2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn) });
  }
  function Jn(e2, n2, o2, r2, a2, i2) {
    if (2162700 === e2.getToken()) return function(e3, n3, t2, o3, r3, a3) {
      J(e3, n3), ee(e3, n3, 14);
      const i3 = Oe(e3, n3, t2, 1, 0, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
      return ee(e3, n3, 1074790415), ie(e3, n3, o3, r3, a3, { type: "JSXSpreadAttribute", argument: i3 });
    }(e2, n2, o2, r2, a2, i2);
    Y(e2);
    let s2 = null, l2 = zn(e2, n2, r2, a2, i2);
    if (21 === e2.getToken() && (l2 = Hn(e2, n2, l2, r2, a2, i2)), 1077936155 === e2.getToken()) {
      const r3 = _(e2, n2), { tokenIndex: a3, tokenLine: i3, tokenColumn: l3 } = e2;
      switch (r3) {
        case 134283267:
          s2 = un(e2, n2);
          break;
        case 8456256:
          s2 = Pn(e2, n2, o2, 0, a3, i3, l3);
          break;
        case 2162700:
          s2 = Mn(e2, n2, o2, 0, 1, a3, i3, l3);
          break;
        default:
          t(e2, 154);
      }
    }
    return ie(e2, n2, r2, a2, i2, { type: "JSXAttribute", value: s2, name: l2 });
  }
  function Hn(e2, n2, t2, o2, r2, a2) {
    ee(e2, n2, 21);
    return ie(e2, n2, o2, r2, a2, { type: "JSXNamespacedName", namespace: t2, name: zn(e2, n2, e2.tokenIndex, e2.tokenLine, e2.tokenColumn) });
  }
  function Mn(e2, n2, o2, r2, a2, i2, s2, l2) {
    J(e2, 8192 | n2);
    const { tokenIndex: c2, tokenLine: u2, tokenColumn: d2 } = e2;
    if (14 === e2.getToken()) return function(e3, n3, t2, o3, r3, a3) {
      ee(e3, n3, 14);
      const i3 = Oe(e3, n3, t2, 1, 0, e3.tokenIndex, e3.tokenLine, e3.tokenColumn);
      return ee(e3, n3, 1074790415), ie(e3, n3, o3, r3, a3, { type: "JSXSpreadChild", expression: i3 });
    }(e2, n2, o2, i2, s2, l2);
    let g2 = null;
    return 1074790415 === e2.getToken() ? (a2 && t(e2, 157), g2 = function(e3, n3, t2, o3, r3) {
      return e3.startIndex = e3.tokenIndex, e3.startLine = e3.tokenLine, e3.startColumn = e3.tokenColumn, ie(e3, n3, t2, o3, r3, { type: "JSXEmptyExpression" });
    }(e2, n2, e2.startIndex, e2.startLine, e2.startColumn)) : g2 = Oe(e2, n2, o2, 1, 0, c2, u2, d2), 1074790415 !== e2.getToken() && t(e2, 25, N[15]), r2 ? $(e2, n2) : J(e2, n2), ie(e2, n2, i2, s2, l2, { type: "JSXExpressionContainer", expression: g2 });
  }
  function zn(e2, n2, o2, r2, a2) {
    143360 & e2.getToken() || t(e2, 30, N[255 & e2.getToken()]);
    const { tokenValue: i2 } = e2;
    return J(e2, n2), ie(e2, n2, o2, r2, a2, { type: "JSXIdentifier", name: i2 });
  }
  var Xn = Object.freeze({ __proto__: null });
  function Zn(e2, n2) {
    return he(e2, n2, 0);
  }

  // node_modules/astring/dist/astring.mjs
  var { stringify } = JSON;
  if (!String.prototype.repeat) {
    throw new Error(
      "String.prototype.repeat is undefined, see https://github.com/davidbonnet/astring#installation"
    );
  }
  if (!String.prototype.endsWith) {
    throw new Error(
      "String.prototype.endsWith is undefined, see https://github.com/davidbonnet/astring#installation"
    );
  }
  var OPERATOR_PRECEDENCE = {
    "||": 2,
    "??": 3,
    "&&": 4,
    "|": 5,
    "^": 6,
    "&": 7,
    "==": 8,
    "!=": 8,
    "===": 8,
    "!==": 8,
    "<": 9,
    ">": 9,
    "<=": 9,
    ">=": 9,
    in: 9,
    instanceof: 9,
    "<<": 10,
    ">>": 10,
    ">>>": 10,
    "+": 11,
    "-": 11,
    "*": 12,
    "%": 12,
    "/": 12,
    "**": 13
  };
  var NEEDS_PARENTHESES = 17;
  var EXPRESSIONS_PRECEDENCE = {
    // Definitions
    ArrayExpression: 20,
    TaggedTemplateExpression: 20,
    ThisExpression: 20,
    Identifier: 20,
    PrivateIdentifier: 20,
    Literal: 18,
    TemplateLiteral: 20,
    Super: 20,
    SequenceExpression: 20,
    // Operations
    MemberExpression: 19,
    ChainExpression: 19,
    CallExpression: 19,
    NewExpression: 19,
    // Other definitions
    ArrowFunctionExpression: NEEDS_PARENTHESES,
    ClassExpression: NEEDS_PARENTHESES,
    FunctionExpression: NEEDS_PARENTHESES,
    ObjectExpression: NEEDS_PARENTHESES,
    // Other operations
    UpdateExpression: 16,
    UnaryExpression: 15,
    AwaitExpression: 15,
    BinaryExpression: 14,
    LogicalExpression: 13,
    ConditionalExpression: 4,
    AssignmentExpression: 3,
    YieldExpression: 2,
    RestElement: 1
  };
  function formatSequence(state, nodes) {
    const { generator } = state;
    state.write("(");
    if (nodes != null && nodes.length > 0) {
      generator[nodes[0].type](nodes[0], state);
      const { length } = nodes;
      for (let i2 = 1; i2 < length; i2++) {
        const param = nodes[i2];
        state.write(", ");
        generator[param.type](param, state);
      }
    }
    state.write(")");
  }
  function expressionNeedsParenthesis(state, node, parentNode, isRightHand) {
    const nodePrecedence = state.expressionsPrecedence[node.type];
    if (nodePrecedence === NEEDS_PARENTHESES) {
      return true;
    }
    const parentNodePrecedence = state.expressionsPrecedence[parentNode.type];
    if (nodePrecedence !== parentNodePrecedence) {
      return !isRightHand && nodePrecedence === 15 && parentNodePrecedence === 14 && parentNode.operator === "**" || nodePrecedence < parentNodePrecedence;
    }
    if (nodePrecedence !== 13 && nodePrecedence !== 14) {
      return false;
    }
    if (node.operator === "**" && parentNode.operator === "**") {
      return !isRightHand;
    }
    if (nodePrecedence === 13 && parentNodePrecedence === 13 && (node.operator === "??" || parentNode.operator === "??")) {
      return true;
    }
    if (isRightHand) {
      return OPERATOR_PRECEDENCE[node.operator] <= OPERATOR_PRECEDENCE[parentNode.operator];
    }
    return OPERATOR_PRECEDENCE[node.operator] < OPERATOR_PRECEDENCE[parentNode.operator];
  }
  function formatExpression(state, node, parentNode, isRightHand) {
    const { generator } = state;
    if (expressionNeedsParenthesis(state, node, parentNode, isRightHand)) {
      state.write("(");
      generator[node.type](node, state);
      state.write(")");
    } else {
      generator[node.type](node, state);
    }
  }
  function reindent(state, text, indent, lineEnd) {
    const lines = text.split("\n");
    const end = lines.length - 1;
    state.write(lines[0].trim());
    if (end > 0) {
      state.write(lineEnd);
      for (let i2 = 1; i2 < end; i2++) {
        state.write(indent + lines[i2].trim() + lineEnd);
      }
      state.write(indent + lines[end].trim());
    }
  }
  function formatComments(state, comments, indent, lineEnd) {
    const { length } = comments;
    for (let i2 = 0; i2 < length; i2++) {
      const comment = comments[i2];
      state.write(indent);
      if (comment.type[0] === "L") {
        state.write("// " + comment.value.trim() + "\n", comment);
      } else {
        state.write("/*");
        reindent(state, comment.value, indent, lineEnd);
        state.write("*/" + lineEnd);
      }
    }
  }
  function hasCallExpression(node) {
    let currentNode = node;
    while (currentNode != null) {
      const { type } = currentNode;
      if (type[0] === "C" && type[1] === "a") {
        return true;
      } else if (type[0] === "M" && type[1] === "e" && type[2] === "m") {
        currentNode = currentNode.object;
      } else {
        return false;
      }
    }
  }
  function formatVariableDeclaration(state, node) {
    const { generator } = state;
    const { declarations } = node;
    state.write(node.kind + " ");
    const { length } = declarations;
    if (length > 0) {
      generator.VariableDeclarator(declarations[0], state);
      for (let i2 = 1; i2 < length; i2++) {
        state.write(", ");
        generator.VariableDeclarator(declarations[i2], state);
      }
    }
  }
  var ForInStatement;
  var FunctionDeclaration;
  var RestElement;
  var BinaryExpression;
  var ArrayExpression;
  var BlockStatement;
  var GENERATOR = {
    /*
    Default generator.
    */
    Program(node, state) {
      const indent = state.indent.repeat(state.indentLevel);
      const { lineEnd, writeComments } = state;
      if (writeComments && node.comments != null) {
        formatComments(state, node.comments, indent, lineEnd);
      }
      const statements = node.body;
      const { length } = statements;
      for (let i2 = 0; i2 < length; i2++) {
        const statement = statements[i2];
        if (writeComments && statement.comments != null) {
          formatComments(state, statement.comments, indent, lineEnd);
        }
        state.write(indent);
        this[statement.type](statement, state);
        state.write(lineEnd);
      }
      if (writeComments && node.trailingComments != null) {
        formatComments(state, node.trailingComments, indent, lineEnd);
      }
    },
    BlockStatement: BlockStatement = function(node, state) {
      const indent = state.indent.repeat(state.indentLevel++);
      const { lineEnd, writeComments } = state;
      const statementIndent = indent + state.indent;
      state.write("{");
      const statements = node.body;
      if (statements != null && statements.length > 0) {
        state.write(lineEnd);
        if (writeComments && node.comments != null) {
          formatComments(state, node.comments, statementIndent, lineEnd);
        }
        const { length } = statements;
        for (let i2 = 0; i2 < length; i2++) {
          const statement = statements[i2];
          if (writeComments && statement.comments != null) {
            formatComments(state, statement.comments, statementIndent, lineEnd);
          }
          state.write(statementIndent);
          this[statement.type](statement, state);
          state.write(lineEnd);
        }
        state.write(indent);
      } else {
        if (writeComments && node.comments != null) {
          state.write(lineEnd);
          formatComments(state, node.comments, statementIndent, lineEnd);
          state.write(indent);
        }
      }
      if (writeComments && node.trailingComments != null) {
        formatComments(state, node.trailingComments, statementIndent, lineEnd);
      }
      state.write("}");
      state.indentLevel--;
    },
    ClassBody: BlockStatement,
    StaticBlock(node, state) {
      state.write("static ");
      this.BlockStatement(node, state);
    },
    EmptyStatement(node, state) {
      state.write(";");
    },
    ExpressionStatement(node, state) {
      const precedence = state.expressionsPrecedence[node.expression.type];
      if (precedence === NEEDS_PARENTHESES || precedence === 3 && node.expression.left.type[0] === "O") {
        state.write("(");
        this[node.expression.type](node.expression, state);
        state.write(")");
      } else {
        this[node.expression.type](node.expression, state);
      }
      state.write(";");
    },
    IfStatement(node, state) {
      state.write("if (");
      this[node.test.type](node.test, state);
      state.write(") ");
      this[node.consequent.type](node.consequent, state);
      if (node.alternate != null) {
        state.write(" else ");
        this[node.alternate.type](node.alternate, state);
      }
    },
    LabeledStatement(node, state) {
      this[node.label.type](node.label, state);
      state.write(": ");
      this[node.body.type](node.body, state);
    },
    BreakStatement(node, state) {
      state.write("break");
      if (node.label != null) {
        state.write(" ");
        this[node.label.type](node.label, state);
      }
      state.write(";");
    },
    ContinueStatement(node, state) {
      state.write("continue");
      if (node.label != null) {
        state.write(" ");
        this[node.label.type](node.label, state);
      }
      state.write(";");
    },
    WithStatement(node, state) {
      state.write("with (");
      this[node.object.type](node.object, state);
      state.write(") ");
      this[node.body.type](node.body, state);
    },
    SwitchStatement(node, state) {
      const indent = state.indent.repeat(state.indentLevel++);
      const { lineEnd, writeComments } = state;
      state.indentLevel++;
      const caseIndent = indent + state.indent;
      const statementIndent = caseIndent + state.indent;
      state.write("switch (");
      this[node.discriminant.type](node.discriminant, state);
      state.write(") {" + lineEnd);
      const { cases: occurences } = node;
      const { length: occurencesCount } = occurences;
      for (let i2 = 0; i2 < occurencesCount; i2++) {
        const occurence = occurences[i2];
        if (writeComments && occurence.comments != null) {
          formatComments(state, occurence.comments, caseIndent, lineEnd);
        }
        if (occurence.test) {
          state.write(caseIndent + "case ");
          this[occurence.test.type](occurence.test, state);
          state.write(":" + lineEnd);
        } else {
          state.write(caseIndent + "default:" + lineEnd);
        }
        const { consequent } = occurence;
        const { length: consequentCount } = consequent;
        for (let i3 = 0; i3 < consequentCount; i3++) {
          const statement = consequent[i3];
          if (writeComments && statement.comments != null) {
            formatComments(state, statement.comments, statementIndent, lineEnd);
          }
          state.write(statementIndent);
          this[statement.type](statement, state);
          state.write(lineEnd);
        }
      }
      state.indentLevel -= 2;
      state.write(indent + "}");
    },
    ReturnStatement(node, state) {
      state.write("return");
      if (node.argument) {
        state.write(" ");
        this[node.argument.type](node.argument, state);
      }
      state.write(";");
    },
    ThrowStatement(node, state) {
      state.write("throw ");
      this[node.argument.type](node.argument, state);
      state.write(";");
    },
    TryStatement(node, state) {
      state.write("try ");
      this[node.block.type](node.block, state);
      if (node.handler) {
        const { handler } = node;
        if (handler.param == null) {
          state.write(" catch ");
        } else {
          state.write(" catch (");
          this[handler.param.type](handler.param, state);
          state.write(") ");
        }
        this[handler.body.type](handler.body, state);
      }
      if (node.finalizer) {
        state.write(" finally ");
        this[node.finalizer.type](node.finalizer, state);
      }
    },
    WhileStatement(node, state) {
      state.write("while (");
      this[node.test.type](node.test, state);
      state.write(") ");
      this[node.body.type](node.body, state);
    },
    DoWhileStatement(node, state) {
      state.write("do ");
      this[node.body.type](node.body, state);
      state.write(" while (");
      this[node.test.type](node.test, state);
      state.write(");");
    },
    ForStatement(node, state) {
      state.write("for (");
      if (node.init != null) {
        const { init } = node;
        if (init.type[0] === "V") {
          formatVariableDeclaration(state, init);
        } else {
          this[init.type](init, state);
        }
      }
      state.write("; ");
      if (node.test) {
        this[node.test.type](node.test, state);
      }
      state.write("; ");
      if (node.update) {
        this[node.update.type](node.update, state);
      }
      state.write(") ");
      this[node.body.type](node.body, state);
    },
    ForInStatement: ForInStatement = function(node, state) {
      state.write(`for ${node.await ? "await " : ""}(`);
      const { left } = node;
      if (left.type[0] === "V") {
        formatVariableDeclaration(state, left);
      } else {
        this[left.type](left, state);
      }
      state.write(node.type[3] === "I" ? " in " : " of ");
      this[node.right.type](node.right, state);
      state.write(") ");
      this[node.body.type](node.body, state);
    },
    ForOfStatement: ForInStatement,
    DebuggerStatement(node, state) {
      state.write("debugger;", node);
    },
    FunctionDeclaration: FunctionDeclaration = function(node, state) {
      state.write(
        (node.async ? "async " : "") + (node.generator ? "function* " : "function ") + (node.id ? node.id.name : ""),
        node
      );
      formatSequence(state, node.params);
      state.write(" ");
      this[node.body.type](node.body, state);
    },
    FunctionExpression: FunctionDeclaration,
    VariableDeclaration(node, state) {
      formatVariableDeclaration(state, node);
      state.write(";");
    },
    VariableDeclarator(node, state) {
      this[node.id.type](node.id, state);
      if (node.init != null) {
        state.write(" = ");
        this[node.init.type](node.init, state);
      }
    },
    ClassDeclaration(node, state) {
      state.write("class " + (node.id ? `${node.id.name} ` : ""), node);
      if (node.superClass) {
        state.write("extends ");
        const { superClass } = node;
        const { type } = superClass;
        const precedence = state.expressionsPrecedence[type];
        if ((type[0] !== "C" || type[1] !== "l" || type[5] !== "E") && (precedence === NEEDS_PARENTHESES || precedence < state.expressionsPrecedence.ClassExpression)) {
          state.write("(");
          this[node.superClass.type](superClass, state);
          state.write(")");
        } else {
          this[superClass.type](superClass, state);
        }
        state.write(" ");
      }
      this.ClassBody(node.body, state);
    },
    ImportDeclaration(node, state) {
      state.write("import ");
      const { specifiers, attributes } = node;
      const { length } = specifiers;
      let i2 = 0;
      if (length > 0) {
        for (; i2 < length; ) {
          if (i2 > 0) {
            state.write(", ");
          }
          const specifier = specifiers[i2];
          const type = specifier.type[6];
          if (type === "D") {
            state.write(specifier.local.name, specifier);
            i2++;
          } else if (type === "N") {
            state.write("* as " + specifier.local.name, specifier);
            i2++;
          } else {
            break;
          }
        }
        if (i2 < length) {
          state.write("{");
          for (; ; ) {
            const specifier = specifiers[i2];
            const { name } = specifier.imported;
            state.write(name, specifier);
            if (name !== specifier.local.name) {
              state.write(" as " + specifier.local.name);
            }
            if (++i2 < length) {
              state.write(", ");
            } else {
              break;
            }
          }
          state.write("}");
        }
        state.write(" from ");
      }
      this.Literal(node.source, state);
      if (attributes && attributes.length > 0) {
        state.write(" with { ");
        for (let i3 = 0; i3 < attributes.length; i3++) {
          this.ImportAttribute(attributes[i3], state);
          if (i3 < attributes.length - 1) state.write(", ");
        }
        state.write(" }");
      }
      state.write(";");
    },
    ImportAttribute(node, state) {
      this.Identifier(node.key, state);
      state.write(": ");
      this.Literal(node.value, state);
    },
    ImportExpression(node, state) {
      state.write("import(");
      this[node.source.type](node.source, state);
      state.write(")");
    },
    ExportDefaultDeclaration(node, state) {
      state.write("export default ");
      this[node.declaration.type](node.declaration, state);
      if (state.expressionsPrecedence[node.declaration.type] != null && node.declaration.type[0] !== "F") {
        state.write(";");
      }
    },
    ExportNamedDeclaration(node, state) {
      state.write("export ");
      if (node.declaration) {
        this[node.declaration.type](node.declaration, state);
      } else {
        state.write("{");
        const { specifiers } = node, { length } = specifiers;
        if (length > 0) {
          for (let i2 = 0; ; ) {
            const specifier = specifiers[i2];
            const { name } = specifier.local;
            state.write(name, specifier);
            if (name !== specifier.exported.name) {
              state.write(" as " + specifier.exported.name);
            }
            if (++i2 < length) {
              state.write(", ");
            } else {
              break;
            }
          }
        }
        state.write("}");
        if (node.source) {
          state.write(" from ");
          this.Literal(node.source, state);
        }
        if (node.attributes && node.attributes.length > 0) {
          state.write(" with { ");
          for (let i2 = 0; i2 < node.attributes.length; i2++) {
            this.ImportAttribute(node.attributes[i2], state);
            if (i2 < node.attributes.length - 1) state.write(", ");
          }
          state.write(" }");
        }
        state.write(";");
      }
    },
    ExportAllDeclaration(node, state) {
      if (node.exported != null) {
        state.write("export * as " + node.exported.name + " from ");
      } else {
        state.write("export * from ");
      }
      this.Literal(node.source, state);
      if (node.attributes && node.attributes.length > 0) {
        state.write(" with { ");
        for (let i2 = 0; i2 < node.attributes.length; i2++) {
          this.ImportAttribute(node.attributes[i2], state);
          if (i2 < node.attributes.length - 1) state.write(", ");
        }
        state.write(" }");
      }
      state.write(";");
    },
    MethodDefinition(node, state) {
      if (node.static) {
        state.write("static ");
      }
      const kind = node.kind[0];
      if (kind === "g" || kind === "s") {
        state.write(node.kind + " ");
      }
      if (node.value.async) {
        state.write("async ");
      }
      if (node.value.generator) {
        state.write("*");
      }
      if (node.computed) {
        state.write("[");
        this[node.key.type](node.key, state);
        state.write("]");
      } else {
        this[node.key.type](node.key, state);
      }
      formatSequence(state, node.value.params);
      state.write(" ");
      this[node.value.body.type](node.value.body, state);
    },
    ClassExpression(node, state) {
      this.ClassDeclaration(node, state);
    },
    ArrowFunctionExpression(node, state) {
      state.write(node.async ? "async " : "", node);
      const { params } = node;
      if (params != null) {
        if (params.length === 1 && params[0].type[0] === "I") {
          state.write(params[0].name, params[0]);
        } else {
          formatSequence(state, node.params);
        }
      }
      state.write(" => ");
      if (node.body.type[0] === "O") {
        state.write("(");
        this.ObjectExpression(node.body, state);
        state.write(")");
      } else {
        this[node.body.type](node.body, state);
      }
    },
    ThisExpression(node, state) {
      state.write("this", node);
    },
    Super(node, state) {
      state.write("super", node);
    },
    RestElement: RestElement = function(node, state) {
      state.write("...");
      this[node.argument.type](node.argument, state);
    },
    SpreadElement: RestElement,
    YieldExpression(node, state) {
      state.write(node.delegate ? "yield*" : "yield");
      if (node.argument) {
        state.write(" ");
        this[node.argument.type](node.argument, state);
      }
    },
    AwaitExpression(node, state) {
      state.write("await ", node);
      formatExpression(state, node.argument, node);
    },
    TemplateLiteral(node, state) {
      const { quasis, expressions } = node;
      state.write("`");
      const { length } = expressions;
      for (let i2 = 0; i2 < length; i2++) {
        const expression = expressions[i2];
        const quasi2 = quasis[i2];
        state.write(quasi2.value.raw, quasi2);
        state.write("${");
        this[expression.type](expression, state);
        state.write("}");
      }
      const quasi = quasis[quasis.length - 1];
      state.write(quasi.value.raw, quasi);
      state.write("`");
    },
    TemplateElement(node, state) {
      state.write(node.value.raw, node);
    },
    TaggedTemplateExpression(node, state) {
      formatExpression(state, node.tag, node);
      this[node.quasi.type](node.quasi, state);
    },
    ArrayExpression: ArrayExpression = function(node, state) {
      state.write("[");
      if (node.elements.length > 0) {
        const { elements } = node, { length } = elements;
        for (let i2 = 0; ; ) {
          const element = elements[i2];
          if (element != null) {
            this[element.type](element, state);
          }
          if (++i2 < length) {
            state.write(", ");
          } else {
            if (element == null) {
              state.write(", ");
            }
            break;
          }
        }
      }
      state.write("]");
    },
    ArrayPattern: ArrayExpression,
    ObjectExpression(node, state) {
      const indent = state.indent.repeat(state.indentLevel++);
      const { lineEnd, writeComments } = state;
      const propertyIndent = indent + state.indent;
      state.write("{");
      if (node.properties.length > 0) {
        state.write(lineEnd);
        if (writeComments && node.comments != null) {
          formatComments(state, node.comments, propertyIndent, lineEnd);
        }
        const comma = "," + lineEnd;
        const { properties } = node, { length } = properties;
        for (let i2 = 0; ; ) {
          const property = properties[i2];
          if (writeComments && property.comments != null) {
            formatComments(state, property.comments, propertyIndent, lineEnd);
          }
          state.write(propertyIndent);
          this[property.type](property, state);
          if (++i2 < length) {
            state.write(comma);
          } else {
            break;
          }
        }
        state.write(lineEnd);
        if (writeComments && node.trailingComments != null) {
          formatComments(state, node.trailingComments, propertyIndent, lineEnd);
        }
        state.write(indent + "}");
      } else if (writeComments) {
        if (node.comments != null) {
          state.write(lineEnd);
          formatComments(state, node.comments, propertyIndent, lineEnd);
          if (node.trailingComments != null) {
            formatComments(state, node.trailingComments, propertyIndent, lineEnd);
          }
          state.write(indent + "}");
        } else if (node.trailingComments != null) {
          state.write(lineEnd);
          formatComments(state, node.trailingComments, propertyIndent, lineEnd);
          state.write(indent + "}");
        } else {
          state.write("}");
        }
      } else {
        state.write("}");
      }
      state.indentLevel--;
    },
    Property(node, state) {
      if (node.method || node.kind[0] !== "i") {
        this.MethodDefinition(node, state);
      } else {
        if (!node.shorthand) {
          if (node.computed) {
            state.write("[");
            this[node.key.type](node.key, state);
            state.write("]");
          } else {
            this[node.key.type](node.key, state);
          }
          state.write(": ");
        }
        this[node.value.type](node.value, state);
      }
    },
    PropertyDefinition(node, state) {
      if (node.static) {
        state.write("static ");
      }
      if (node.computed) {
        state.write("[");
      }
      this[node.key.type](node.key, state);
      if (node.computed) {
        state.write("]");
      }
      if (node.value == null) {
        if (node.key.type[0] !== "F") {
          state.write(";");
        }
        return;
      }
      state.write(" = ");
      this[node.value.type](node.value, state);
      state.write(";");
    },
    ObjectPattern(node, state) {
      state.write("{");
      if (node.properties.length > 0) {
        const { properties } = node, { length } = properties;
        for (let i2 = 0; ; ) {
          this[properties[i2].type](properties[i2], state);
          if (++i2 < length) {
            state.write(", ");
          } else {
            break;
          }
        }
      }
      state.write("}");
    },
    SequenceExpression(node, state) {
      formatSequence(state, node.expressions);
    },
    UnaryExpression(node, state) {
      if (node.prefix) {
        const {
          operator,
          argument,
          argument: { type }
        } = node;
        state.write(operator);
        const needsParentheses = expressionNeedsParenthesis(state, argument, node);
        if (!needsParentheses && (operator.length > 1 || type[0] === "U" && (type[1] === "n" || type[1] === "p") && argument.prefix && argument.operator[0] === operator && (operator === "+" || operator === "-"))) {
          state.write(" ");
        }
        if (needsParentheses) {
          state.write(operator.length > 1 ? " (" : "(");
          this[type](argument, state);
          state.write(")");
        } else {
          this[type](argument, state);
        }
      } else {
        this[node.argument.type](node.argument, state);
        state.write(node.operator);
      }
    },
    UpdateExpression(node, state) {
      if (node.prefix) {
        state.write(node.operator);
        this[node.argument.type](node.argument, state);
      } else {
        this[node.argument.type](node.argument, state);
        state.write(node.operator);
      }
    },
    AssignmentExpression(node, state) {
      this[node.left.type](node.left, state);
      state.write(" " + node.operator + " ");
      this[node.right.type](node.right, state);
    },
    AssignmentPattern(node, state) {
      this[node.left.type](node.left, state);
      state.write(" = ");
      this[node.right.type](node.right, state);
    },
    BinaryExpression: BinaryExpression = function(node, state) {
      const isIn = node.operator === "in";
      if (isIn) {
        state.write("(");
      }
      formatExpression(state, node.left, node, false);
      state.write(" " + node.operator + " ");
      formatExpression(state, node.right, node, true);
      if (isIn) {
        state.write(")");
      }
    },
    LogicalExpression: BinaryExpression,
    ConditionalExpression(node, state) {
      const { test } = node;
      const precedence = state.expressionsPrecedence[test.type];
      if (precedence === NEEDS_PARENTHESES || precedence <= state.expressionsPrecedence.ConditionalExpression) {
        state.write("(");
        this[test.type](test, state);
        state.write(")");
      } else {
        this[test.type](test, state);
      }
      state.write(" ? ");
      this[node.consequent.type](node.consequent, state);
      state.write(" : ");
      this[node.alternate.type](node.alternate, state);
    },
    NewExpression(node, state) {
      state.write("new ");
      const precedence = state.expressionsPrecedence[node.callee.type];
      if (precedence === NEEDS_PARENTHESES || precedence < state.expressionsPrecedence.CallExpression || hasCallExpression(node.callee)) {
        state.write("(");
        this[node.callee.type](node.callee, state);
        state.write(")");
      } else {
        this[node.callee.type](node.callee, state);
      }
      formatSequence(state, node["arguments"]);
    },
    CallExpression(node, state) {
      const precedence = state.expressionsPrecedence[node.callee.type];
      if (precedence === NEEDS_PARENTHESES || precedence < state.expressionsPrecedence.CallExpression) {
        state.write("(");
        this[node.callee.type](node.callee, state);
        state.write(")");
      } else {
        this[node.callee.type](node.callee, state);
      }
      if (node.optional) {
        state.write("?.");
      }
      formatSequence(state, node["arguments"]);
    },
    ChainExpression(node, state) {
      this[node.expression.type](node.expression, state);
    },
    MemberExpression(node, state) {
      const precedence = state.expressionsPrecedence[node.object.type];
      if (precedence === NEEDS_PARENTHESES || precedence < state.expressionsPrecedence.MemberExpression) {
        state.write("(");
        this[node.object.type](node.object, state);
        state.write(")");
      } else {
        this[node.object.type](node.object, state);
      }
      if (node.computed) {
        if (node.optional) {
          state.write("?.");
        }
        state.write("[");
        this[node.property.type](node.property, state);
        state.write("]");
      } else {
        if (node.optional) {
          state.write("?.");
        } else {
          state.write(".");
        }
        this[node.property.type](node.property, state);
      }
    },
    MetaProperty(node, state) {
      state.write(node.meta.name + "." + node.property.name, node);
    },
    Identifier(node, state) {
      state.write(node.name, node);
    },
    PrivateIdentifier(node, state) {
      state.write(`#${node.name}`, node);
    },
    Literal(node, state) {
      if (node.raw != null) {
        state.write(node.raw, node);
      } else if (node.regex != null) {
        this.RegExpLiteral(node, state);
      } else if (node.bigint != null) {
        state.write(node.bigint + "n", node);
      } else {
        state.write(stringify(node.value), node);
      }
    },
    RegExpLiteral(node, state) {
      const { regex } = node;
      state.write(`/${regex.pattern}/${regex.flags}`, node);
    }
  };
  var EMPTY_OBJECT = {};
  var State = class {
    constructor(options) {
      const setup = options == null ? EMPTY_OBJECT : options;
      this.output = "";
      if (setup.output != null) {
        this.output = setup.output;
        this.write = this.writeToStream;
      } else {
        this.output = "";
      }
      this.generator = setup.generator != null ? setup.generator : GENERATOR;
      this.expressionsPrecedence = setup.expressionsPrecedence != null ? setup.expressionsPrecedence : EXPRESSIONS_PRECEDENCE;
      this.indent = setup.indent != null ? setup.indent : "  ";
      this.lineEnd = setup.lineEnd != null ? setup.lineEnd : "\n";
      this.indentLevel = setup.startingIndentLevel != null ? setup.startingIndentLevel : 0;
      this.writeComments = setup.comments ? setup.comments : false;
      if (setup.sourceMap != null) {
        this.write = setup.output == null ? this.writeAndMap : this.writeToStreamAndMap;
        this.sourceMap = setup.sourceMap;
        this.line = 1;
        this.column = 0;
        this.lineEndSize = this.lineEnd.split("\n").length - 1;
        this.mapping = {
          original: null,
          // Uses the entire state to avoid generating ephemeral objects
          generated: this,
          name: void 0,
          source: setup.sourceMap.file || setup.sourceMap._file
        };
      }
    }
    write(code) {
      this.output += code;
    }
    writeToStream(code) {
      this.output.write(code);
    }
    writeAndMap(code, node) {
      this.output += code;
      this.map(code, node);
    }
    writeToStreamAndMap(code, node) {
      this.output.write(code);
      this.map(code, node);
    }
    map(code, node) {
      if (node != null) {
        const { type } = node;
        if (type[0] === "L" && type[2] === "n") {
          this.column = 0;
          this.line++;
          return;
        }
        if (node.loc != null) {
          const { mapping } = this;
          mapping.original = node.loc.start;
          mapping.name = node.name;
          this.sourceMap.addMapping(mapping);
        }
        if (type[0] === "T" && type[8] === "E" || type[0] === "L" && type[1] === "i" && typeof node.value === "string") {
          const { length: length2 } = code;
          let { column, line } = this;
          for (let i2 = 0; i2 < length2; i2++) {
            if (code[i2] === "\n") {
              column = 0;
              line++;
            } else {
              column++;
            }
          }
          this.column = column;
          this.line = line;
          return;
        }
      }
      const { length } = code;
      const { lineEnd } = this;
      if (length > 0) {
        if (this.lineEndSize > 0 && (lineEnd.length === 1 ? code[length - 1] === lineEnd : code.endsWith(lineEnd))) {
          this.line += this.lineEndSize;
          this.column = 0;
        } else {
          this.column += length;
        }
      }
    }
    toString() {
      return this.output;
    }
  };
  function generate(node, options) {
    const state = new State(options);
    state.generator[node.type](node, state);
    return state.output;
  }

  // src/SvCompiler.ts
  var nativeTagClassNames = {};
  "Anchor:a;_:abbr,address,article,aside,b,bdi,bdo,cite,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rp,rt,ruby,s,samp,search,section,small,strong,sub,summary,sup,u,var,wbr;Area:area;Audio:audio;Base:base;Quote:blockquote,q;Body:body;BR:br;Button:button;Canvas:canvas;TableCaption:caption;TableCol:col,colgroup;Data:data;DataList:datalist;Mod:del,ins;Details:details;Dialog:dialog;Div:div;DList:dl;Embed:embed;FieldSet:fieldset;Form:form;Heading:h1,h2,h3,h4,h5,h6;Head:head;HR:hr;Html:html;IFrame:iframe;Image:img;Input:input;Label:label;Legend:legend;LI:li;Link:link;Map:map;Menu:menu;Meta:meta;Meter:meter;Object:object;OList:ol;OptGroup:optgroup;Option:option;Output:output;Paragraph:p;Param:param;Picture:picture;Pre:pre;Progress:progress;Script:script;Select:select;Source:source;Span:span;Style:style;Unknown:svg;Table:table;TableSection:tbody,tfoot,thead;TableCell:td,th;Template:template;TextArea:textarea;Time:time;Title:title;TableRow:tr;Track:track;UList:ul;Video:video".split(";").forEach((s2) => {
    const [name, tags] = s2.split(":");
    const fullName = `HTML${name === "_" ? "" : name}Element`;
    tags.split(",").forEach((tag) => nativeTagClassNames[tag] = fullName);
  });
  function pascalToHyphen(tag) {
    let chunkStart = 0;
    let output = "";
    for (let i2 = 0; i2 <= tag.length; i2++) {
      if (i2 === tag.length || tag.charCodeAt(i2) <= 90) {
        if (chunkStart != i2) {
          let chunk = tag.slice(chunkStart, i2);
          output += (chunkStart !== 0 ? "-" : "") + chunk.toLowerCase();
          chunkStart = i2;
        }
      }
    }
    return output;
  }
  var SvCompiler = class {
    S$;
    TemplateElement;
    constructor(S$, tmpElClass) {
      this.S$ = S$;
      this.TemplateElement = tmpElClass;
    }
    compile(name, code) {
      const virtComp = new this.TemplateElement(name, "", code);
      let virtCompScript = null;
      for (let i2 = 0; i2 < virtComp.children.length; i2++) {
        const node = virtComp.children[i2];
        if (node instanceof this.TemplateElement && node.tag === "script") {
          virtCompScript = node;
          virtComp.children.splice(i2, 1);
          break;
        }
      }
      let virtCompStyle = null;
      for (let i2 = virtComp.children.length - 1; i2 >= 0; i2--) {
        const node = virtComp.children[i2];
        if (node instanceof this.TemplateElement && node.tag === "style") {
          virtCompStyle = node;
          virtComp.children.splice(i2, 1);
          break;
        }
      }
      let firstChild = null;
      let lastChild = null;
      for (let i2 = 0; i2 < virtComp.children.length; i2++) {
        const node = virtComp.children[i2];
        if (node instanceof this.TemplateElement) {
          if (firstChild === null) {
            firstChild = node;
          }
          lastChild = node;
        }
      }
      let hasMultipleChildren = firstChild !== lastChild;
      let state = {};
      let ast = null;
      if (virtCompScript) {
        let recurse = function(treeNode) {
          let children = [];
          if (treeNode.type === "Program") {
            children = treeNode.body;
          } else if (treeNode.type === "ExpressionStatement") {
            if (treeNode.expression.type !== "SequenceExpression") {
              treeNode.expression = {
                "type": "SequenceExpression",
                "expressions": [treeNode.expression]
              };
            }
            children = treeNode.expression.expressions;
          } else if (treeNode.type === "CallExpression") {
            children = treeNode.arguments;
          } else if (treeNode.type === "ArrowFunctionExpression") {
            if (treeNode.body.type !== "BlockStatement") {
              treeNode.body = {
                "type": "BlockStatement",
                "body": [
                  treeNode.body
                ]
              };
            }
            children = treeNode.body.body;
          } else if (treeNode.type === "UpdateExpression") {
            children = [treeNode.argument];
          }
          let needsUpdate = [];
          for (let i2 = 0; i2 < children.length; i2++) {
            const child = children[i2];
            if (child.type === "Identifier") {
              if (state[child.name] !== void 0) {
                console.log("EDIT", treeNode);
                child.name = "$_state." + child.name;
                if (["Program", "ExpressionStatement", "CallExpression", "ArrowFunctionExpression"].includes(treeNode.type)) {
                  children.push({
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "name": "that"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "render"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false
                    }
                  });
                } else {
                  needsUpdate.push(child.name);
                }
              }
            } else {
              recurse(child).forEach((item) => needsUpdate.push(item));
              if (needsUpdate.length !== 0 && ["Program", "ExpressionStatement", "CallExpression", "ArrowFunctionExpression"].includes(treeNode.type)) {
                children.push({
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "name": "that"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "render"
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [{
                    "type": "ArrayExpression",
                    "elements": needsUpdate.map((item) => {
                      item = item.slice("$_state.".length);
                      return {
                        "type": "Literal",
                        "value": item,
                        "raw": JSON.stringify(item)
                      };
                    })
                  }],
                  "optional": false
                });
                needsUpdate = [];
              }
            }
          }
          return needsUpdate;
        };
        ast = Zn(virtCompScript.getInnerHTML());
        console.log(ast);
        for (let i2 = 0; i2 < ast.body.length; i2++) {
          const statement = ast.body[i2];
          if (statement.type === "VariableDeclaration") {
            let expressions = [];
            for (let j2 = 0; j2 < statement.declarations.length; j2++) {
              let declaration = statement.declarations[j2];
              if (declaration.id.type === "Identifier") {
                const declName = declaration.id.name;
                state[declName] = null;
                declaration.id.name = `$_state.${declName}`;
                expressions.push({
                  "type": "AssignmentExpression",
                  "left": declaration.id,
                  "operator": "=",
                  "right": declaration.init
                });
              } else if (declaration.id.type === "ObjectPattern") {
                declaration.id.properties.forEach((prop) => {
                  const declName = prop.key.name;
                  state[declName] = null;
                  prop.key.name = `$_state.${declName}`;
                  if (declaration.init.callee?.name === "$props") {
                    declaration.init = {
                      "type": "MemberExpression",
                      "object": declaration.init,
                      "computed": false,
                      "property": {
                        "type": "Identifier",
                        "name": declName
                      }
                    };
                  }
                  expressions.push({
                    "type": "AssignmentExpression",
                    "left": prop.key,
                    "operator": "=",
                    "right": declaration.init
                  });
                });
              }
            }
            ast.body[i2] = {
              "type": "ExpressionStatement",
              "expression": {
                "type": "SequenceExpression",
                "expressions": expressions
              }
            };
          } else if (statement.type === "LabeledStatement" && statement.label.name === "$") {
            const declName = statement.body.expression.left.name;
            state[declName] = null;
            statement.body.expression.left.name = `$_state.${declName}`;
            ast.body[i2] = {
              "type": "ExpressionStatement",
              "expression": statement.body.expression
            };
          }
        }
        recurse(ast);
      }
      const firstChildTag = firstChild.tag;
      const componentClassSource = `
function initDirectives(template, rootEL) {
    for (let i = 0; i < template.children.length; i++) {
        const node = template.children[i];
        if (node instanceof S$.TemplateElement) {
            for (const key in node.attributes) {
                if (key.startsWith("on:")) {
                    const directiveGenSrc = "return " + node.attributes[key].replace("count", "$_state.count").replace("()", "$_state");
                    console.log(directiveGenSrc)
                    const directiveFn = Function(directiveGenSrc)();
                    rootEL.directives[key] = () => {
                        directiveFn(rootEL.state);
                        rootEL.render(node.dependencies);
                    };
                }
            }
            initDirectives(node, rootEL);
        }
    }
}
function initElementTreeListeners(tree, rootEl) {
    for (let i = 0; i < tree.children.length; i++) {
        const node = tree.children[i];
        if (node instanceof HTMLElement) {
            for (const key in node.$directives) {
                // console.log("DIR", node, node.$directives, key.slice(3), rootEl.directives[key])
                node.addEventListener(key.slice(3), rootEl.directives[key]);
            }
            initElementTreeListeners(node, rootEl);
        }
    }
}
class ${name} extends ${hasMultipleChildren ? "HTMLDivElement" : nativeTagClassNames[firstChildTag]} {
    static template = S$.TemplateElement.deserialize(${virtComp.serialize()});
    state = ${JSON.stringify(state)};
    directives = {};
    depNodeMap = {};
    constructor(props) {
        super();
        let that = this;
        let $_state = this.state;
        const $props = () => props;
${ast === null ? "" : generate(ast)}
        const template = ${name}.template;
        initDirectives(template, this);
        this.render();
        console.log("TEMP", template)
        console.log("THIS")
        console.log(this)
        console.log(this.directives);
    }
    render(changedStates) {
        if (changedStates === undefined) {
            let $_state = this.state;
            const templateInstance = ${name}.template.createInstance($_state, this.depNodeMap);
            console.log("TEMP INST", templateInstance)        
            initElementTreeListeners(templateInstance, this);
            this.innerHTML = "";
            for (let i = 0; i < templateInstance.children.length; i++) {
                this.append(templateInstance.children[i]);
            }
        } else {
            for (let i = 0; i < changedStates.length; i++) {
                const stateName = changedStates[i];
                let dependentNodes = this.depNodeMap[stateName];
                for (let j = 0; j < dependentNodes.length; j++) {
                    let node = dependentNodes[j];
                    let newNode = node.$template.createInstance(this.state);
                    dependentNodes[j] = newNode;
                    for (const key in newNode.$directives) {
                        newNode.addEventListener(key.slice(3), this.directives[key]);
                    }
                    initElementTreeListeners(newNode, this);
                    node.replaceWith(newNode);
                }
            }
        }
    }
}
window.customElements.define("${pascalToHyphen(name)}", ${name}, { extends: "${hasMultipleChildren ? "div" : firstChildTag}" });
S$.components["${name}"] = ${name};`;
      return componentClassSource;
    }
  };
  if (globalThis.window !== void 0) {
    window["SvCompiler"] = SvCompiler;
  }
})();
