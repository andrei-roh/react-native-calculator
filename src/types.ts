export enum ButtonWrapperSize {
  Default = 'defaultWrapper',
  Big = 'bigWrapper',
}

export enum ButtonSize {
  Default = 'defaultButton',
  Big = 'bigButton',
}

export enum ButtonColor {
  Default = 'defaultColor',
  Operator = 'operatorColor',
  Additional = 'additionalColor',
  Landscape = 'landscapeColor',
}

export enum ButtonPressed {
  Default = 'defaultColorOnPressed',
  Operator = 'operatorColorOnPressed',
  Additional = 'additionalColorOnPressed',
  Landscape = 'landscapeColorOnPressed',
}

export enum Action {
  Empty = '',
  Number = 'number',
  Equal = 'equal',
  AllClear = 'allClear',
  ChangeSign = 'changeSign',
  GetPercentage = 'getPercentage',
  Addition = '+',
  Subtraction = '-',
  Multiplication = '*',
  Division = '/',
  LeftBraket = '(',
  RightBraket = ')',
  MemoryClear = 'mc',
  MemoryAddValue = 'm+',
  MemorySubstractValue = 'm-',
  MemoryReturn = 'mr',
  SecondFunction = '2nd',
  Square = 'squaring',
  Cube = 'cube',
  Degree = 'degree',
  Exponent = 'exponentiation',
  TenInDegree = 'tenInDegree',
  RatioToDivision = 'ratioToDivision',
  SquareRoot = 'sqrt',
  CubeRoot = 'cbrt',
  RootByNumber = 'rootExtraction',
  Logarithm = 'log',
  TenLogarithm = 'log10',
  Factorial = 'x!',
  Sine = 'sin',
  Cosine = 'cos',
  Tangent = 'tan',
  Euler = 'e',
  EnterExponent = 'enterExponent',
  Mode = 'mode',
  HyperSine = 'sinh',
  HyperCosine = 'cosh',
  HyperTangent = 'tanh',
  Pi = 'pi',
  Random = 'random',
  DegreeBeforeNumber = 'degreeBeforeNumber',
  TwoInDegree = 'twoInDegree',
  NumberLogaritm = 'logByBase',
  TwoLogarithm = 'log2',
  InverseSine = 'sin-1',
  InverseCosine = 'cos-1',
  InverseTangent = 'tan-1',
  InverseHyperSine = 'sinh-1',
  InverseHyperCosine = 'cosh-1',
  InverseHyperTangent = 'tanh-1',
}

export interface State {
  currentValue: string;
  action: Action;
  previousValue: string | null;
  isCalculated: boolean;
  isRadians: boolean;
  result: string;
  memory: string;
}

export interface Data {
  id: string;
  title: string;
  changeableTitle?: string;
  isToggler?: boolean;
  classes: {
    wrapperSize: ButtonWrapperSize;
    buttonSize: ButtonSize;
    buttonColor: ButtonColor;
    buttonState?: ButtonPressed;
  };
  type: Action;
  secondType?: Action;
  value: string | null;
}

export enum Orientation {
  Portrait = 'portrait',
  Landscape = 'landscape',
}
