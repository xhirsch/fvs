module.exports = {
  logLevel: 'debug',
  excludes: ['./tmp/**', './public/**'],
  aliases: {
    styled: 'styled-components',

    // LODASH
    chunk: 'lodash/chunk',
    compact: 'lodash/compact',
    concat: 'lodash/concat',
    difference: 'lodash/difference',
    differenceBy: 'lodash/differenceBy',
    differenceWith: 'lodash/differenceWith',
    drop: 'lodash/drop',
    dropRight: 'lodash/dropRight',
    dropRightWhile: 'lodash/dropRightWhile',
    dropWhile: 'lodash/dropWhile',
    fill: 'lodash/fill',
    findIndex: 'lodash/findIndex',
    findLastIndex: 'lodash/findLastIndex',
    flatten: 'lodash/flatten',
    flattenDeep: 'lodash/flattenDeep',
    flattenDepth: 'lodash/flattenDepth',
    fromPairs: 'lodash/fromPairs',
    head: 'lodash/head',
    indexOf: 'lodash/indexOf',
    initial: 'lodash/initial',
    intersection: 'lodash/intersection',
    intersectionBy: 'lodash/intersectionBy',
    intersectionWith: 'lodash/intersectionWith',
    join: 'lodash/join',
    last: 'lodash/last',
    lastIndexOf: 'lodash/lastIndexOf',
    nth: 'lodash/nth',
    pull: 'lodash/pull',
    pullAll: 'lodash/pullAll',
    pullAllBy: 'lodash/pullAllBy',
    pullAllWith: 'lodash/pullAllWith',
    pullAt: 'lodash/pullAt',
    remove: 'lodash/remove',
    reverse: 'lodash/reverse',
    slice: 'lodash/slice',
    sortedIndex: 'lodash/sortedIndex',
    sortedIndexBy: 'lodash/sortedIndexBy',
    sortedIndexOf: 'lodash/sortedIndexOf',
    sortedLastIndex: 'lodash/sortedLastIndex',
    sortedLastIndexBy: 'lodash/sortedLastIndexBy',
    sortedLastIndexOf: 'lodash/sortedLastIndexOf',
    sortedUniq: 'lodash/sortedUniq',
    sortedUniqBy: 'lodash/sortedUniqBy',
    tail: 'lodash/tail',
    take: 'lodash/take',
    takeRight: 'lodash/takeRight',
    takeRightWhile: 'lodash/takeRightWhile',
    takeWhile: 'lodash/takeWhile',
    union: 'lodash/union',
    unionBy: 'lodash/unionBy',
    unionWith: 'lodash/unionWith',
    uniq: 'lodash/uniq',
    uniqBy: 'lodash/uniqBy',
    uniqWith: 'lodash/uniqWith',
    unzip: 'lodash/unzip',
    unzipWith: 'lodash/unzipWith',
    without: 'lodash/without',
    xor: 'lodash/xor',
    xorBy: 'lodash/xorBy',
    xorWith: 'lodash/xorWith',
    zip: 'lodash/zip',
    zipObject: 'lodash/zipObject',
    zipObjectDeep: 'lodash/zipObjectDeep',
    zipWith: 'lodash/zipWith',
    countBy: 'lodash/countBy',
    every: 'lodash/every',
    filter: 'lodash/filter',
    find: 'lodash/find',
    findLast: 'lodash/findLast',
    flatMap: 'lodash/flatMap',
    flatMapDeep: 'lodash/flatMapDeep',
    flatMapDepth: 'lodash/flatMapDepth',
    forEach: 'lodash/forEach',
    forEachRight: 'lodash/forEachRight',
    groupBy: 'lodash/groupBy',
    includes: 'lodash/includes',
    invokeMap: 'lodash/invokeMap',
    keyBy: 'lodash/keyBy',
    map: 'lodash/map',
    orderBy: 'lodash/orderBy',
    partition: 'lodash/partition',
    reduce: 'lodash/reduce',
    reduceRight: 'lodash/reduceRight',
    reject: 'lodash/reject',
    sample: 'lodash/sample',
    sampleSize: 'lodash/sampleSize',
    shuffle: 'lodash/shuffle',
    size: 'lodash/size',
    some: 'lodash/some',
    sortBy: 'lodash/sortBy',
    now: 'lodash/now',
    after: 'lodash/after',
    ary: 'lodash/ary',
    before: 'lodash/before',
    bind: 'lodash/bind',
    bindKey: 'lodash/bindKey',
    curry: 'lodash/curry',
    curryRight: 'lodash/curryRight',
    debounce: 'lodash/debounce',
    defer: 'lodash/defer',
    delay: 'lodash/delay',
    flip: 'lodash/flip',
    memoize: 'lodash/memoize',
    negate: 'lodash/negate',
    once: 'lodash/once',
    overArgs: 'lodash/overArgs',
    partial: 'lodash/partial',
    partialRight: 'lodash/partialRight',
    rearg: 'lodash/rearg',
    rest: 'lodash/rest',
    spread: 'lodash/spread',
    throttle: 'lodash/throttle',
    unary: 'lodash/unary',
    wrap: 'lodash/wrap',
    castArray: 'lodash/castArray',
    clone: 'lodash/clone',
    cloneDeep: 'lodash/cloneDeep',
    cloneDeepWith: 'lodash/cloneDeepWith',
    cloneWith: 'lodash/cloneWith',
    conformsTo: 'lodash/conformsTo',
    eq: 'lodash/eq',
    gt: 'lodash/gt',
    gte: 'lodash/gte',
    isArguments: 'lodash/isArguments',
    isArray: 'lodash/isArray',
    isArrayBuffer: 'lodash/isArrayBuffer',
    isArrayLike: 'lodash/isArrayLike',
    isArrayLikeObject: 'lodash/isArrayLikeObject',
    isBoolean: 'lodash/isBoolean',
    isBuffer: 'lodash/isBuffer',
    isDate: 'lodash/isDate',
    isElement: 'lodash/isElement',
    isEmpty: 'lodash/isEmpty',
    isEqual: 'lodash/isEqual',
    isEqualWith: 'lodash/isEqualWith',
    isError: 'lodash/isError',
    isFinite: 'lodash/isFinite',
    isFunction: 'lodash/isFunction',
    isInteger: 'lodash/isInteger',
    isLength: 'lodash/isLength',
    isMap: 'lodash/isMap',
    isMatch: 'lodash/isMatch',
    isMatchWith: 'lodash/isMatchWith',
    isNaN: 'lodash/isNaN',
    isNative: 'lodash/isNative',
    isNil: 'lodash/isNil',
    isNull: 'lodash/isNull',
    isNumber: 'lodash/isNumber',
    isObject: 'lodash/isObject',
    isObjectLike: 'lodash/isObjectLike',
    isPlainObject: 'lodash/isPlainObject',
    isRegExp: 'lodash/isRegExp',
    isSafeInteger: 'lodash/isSafeInteger',
    isSet: 'lodash/isSet',
    isString: 'lodash/isString',
    isSymbol: 'lodash/isSymbol',
    isTypedArray: 'lodash/isTypedArray',
    isUndefined: 'lodash/isUndefined',
    isWeakMap: 'lodash/isWeakMap',
    isWeakSet: 'lodash/isWeakSet',
    lt: 'lodash/lt',
    lte: 'lodash/lte',
    toArray: 'lodash/toArray',
    toFinite: 'lodash/toFinite',
    toInteger: 'lodash/toInteger',
    toLength: 'lodash/toLength',
    toNumber: 'lodash/toNumber',
    toPlainObject: 'lodash/toPlainObject',
    toSafeInteger: 'lodash/toSafeInteger',
    toString: 'lodash/toString',
    add: 'lodash/add',
    ceil: 'lodash/ceil',
    divide: 'lodash/divide',
    floor: 'lodash/floor',
    max: 'lodash/max',
    maxBy: 'lodash/maxBy',
    mean: 'lodash/mean',
    meanBy: 'lodash/meanBy',
    min: 'lodash/min',
    minBy: 'lodash/minBy',
    multiply: 'lodash/multiply',
    round: 'lodash/round',
    subtract: 'lodash/subtract',
    sum: 'lodash/sum',
    sumBy: 'lodash/sumBy',
    clamp: 'lodash/clamp',
    inRange: 'lodash/inRange',
    random: 'lodash/random',
    assign: 'lodash/assign',
    assignIn: 'lodash/assignIn',
    assignInWith: 'lodash/assignInWith',
    assignWith: 'lodash/assignWith',
    at: 'lodash/at',
    create: 'lodash/create',
    defaults: 'lodash/defaults',
    defaultsDeep: 'lodash/defaultsDeep',
    findKey: 'lodash/findKey',
    findLastKey: 'lodash/findLastKey',
    forIn: 'lodash/forIn',
    forInRight: 'lodash/forInRight',
    forOwn: 'lodash/forOwn',
    forOwnRight: 'lodash/forOwnRight',
    functions: 'lodash/functions',
    functionsIn: 'lodash/functionsIn',
    get: 'lodash/get',
    has: 'lodash/has',
    hasIn: 'lodash/hasIn',
    invert: 'lodash/invert',
    invertBy: 'lodash/invertBy',
    invoke: 'lodash/invoke',
    keys: 'lodash/keys',
    keysIn: 'lodash/keysIn',
    mapKeys: 'lodash/mapKeys',
    mapValues: 'lodash/mapValues',
    merge: 'lodash/merge',
    mergeWith: 'lodash/mergeWith',
    omit: 'lodash/omit',
    omitBy: 'lodash/omitBy',
    pick: 'lodash/pick',
    pickBy: 'lodash/pickBy',
    result: 'lodash/result',
    set: 'lodash/set',
    setWith: 'lodash/setWith',
    toPairs: 'lodash/toPairs',
    toPairsIn: 'lodash/toPairsIn',
    transform: 'lodash/transform',
    unset: 'lodash/unset',
    update: 'lodash/update',
    updateWith: 'lodash/updateWith',
    values: 'lodash/values',
    valuesIn: 'lodash/valuesIn',
    chain: 'lodash/chain',
    tap: 'lodash/tap',
    thru: 'lodash/thru',
    'prototype[Symbol': 'lodash/prototype[Symbol',
    prototype: 'lodash/prototype',
    camelCase: 'lodash/camelCase',
    capitalize: 'lodash/capitalize',
    deburr: 'lodash/deburr',
    endsWith: 'lodash/endsWith',
    escape: 'lodash/escape',
    escapeRegExp: 'lodash/escapeRegExp',
    kebabCase: 'lodash/kebabCase',
    lowerCase: 'lodash/lowerCase',
    lowerFirst: 'lodash/lowerFirst',
    pad: 'lodash/pad',
    padEnd: 'lodash/padEnd',
    padStart: 'lodash/padStart',
    parseInt: 'lodash/parseInt',
    repeat: 'lodash/repeat',
    replace: 'lodash/replace',
    snakeCase: 'lodash/snakeCase',
    split: 'lodash/split',
    startCase: 'lodash/startCase',
    startsWith: 'lodash/startsWith',
    template: 'lodash/template',
    toLower: 'lodash/toLower',
    toUpper: 'lodash/toUpper',
    trim: 'lodash/trim',
    trimEnd: 'lodash/trimEnd',
    trimStart: 'lodash/trimStart',
    truncate: 'lodash/truncate',
    unescape: 'lodash/unescape',
    upperCase: 'lodash/upperCase',
    upperFirst: 'lodash/upperFirst',
    words: 'lodash/words',
    attempt: 'lodash/attempt',
    bindAll: 'lodash/bindAll',
    cond: 'lodash/cond',
    conforms: 'lodash/conforms',
    constant: 'lodash/constant',
    defaultTo: 'lodash/defaultTo',
    flow: 'lodash/flow',
    flowRight: 'lodash/flowRight',
    identity: 'lodash/identity',
    iteratee: 'lodash/iteratee',
    matches: 'lodash/matches',
    matchesProperty: 'lodash/matchesProperty',
    method: 'lodash/method',
    methodOf: 'lodash/methodOf',
    mixin: 'lodash/mixin',
    noConflict: 'lodash/noConflict',
    noop: 'lodash/noop',
    nthArg: 'lodash/nthArg',
    over: 'lodash/over',
    overEvery: 'lodash/overEvery',
    overSome: 'lodash/overSome',
    property: 'lodash/property',
    propertyOf: 'lodash/propertyOf',
    range: 'lodash/range',
    rangeRight: 'lodash/rangeRight',
    runInContext: 'lodash/runInContext',
    stubArray: 'lodash/stubArray',
    stubFalse: 'lodash/stubFalse',
    stubObject: 'lodash/stubObject',
    stubString: 'lodash/stubString',
    stubTrue: 'lodash/stubTrue',
    times: 'lodash/times',
    toPath: 'lodash/toPath',
    uniqueId: 'lodash/uniqueId',
  },
  namedExports: {
    enzyme: ['shallow', 'mount', 'render'],
    'styled-components': ['ThemeProvider', 'withTheme', 'createGlobalStyle'],
    'react-spring': [
      'animated',
      'useTransition',
      'useSpring',
      'useSprings',
      'config',
    ],
    formik: [
      'useField',
      'Formik',
      'useFormik',
      'useFormikContext',
      'FormikProps',
      'Field',
      'FormikErrors',
    ],
    'react-router-dom': [
      'Link',
      'NavLink',
      'Switch',
      'Route',
      'BrowserRouter',
      'Redirect',
      'useParams',
      'useLocation',
    ],
    '@react-google-maps/api': [
      'GoogleMap',
      'useLoadScript',
      'Marker',
      'Polyline',
    ],
    react: [
      'cloneElement',
      'Children',
      'useState',
      'useEffect',
      'useContext',
      'useReducer',
      'useCallback',
      'useMemo',
      'useRef',
      'useImperativeMethods',
      'useLayoutEffect',
      'createContext',
    ],
  },
};
