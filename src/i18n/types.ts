import en from './en';
export type BaseTranslations = typeof en;

export type DotPaths<T, Prev extends string = ''> = {
  [K in keyof T]:
    T[K] extends object
      ? DotPaths<T[K], `${Prev}${Extract<K, string>}.`>
      : `${Prev}${Extract<K, string>}`;
}[keyof T];

export type TranslationKey = DotPaths<BaseTranslations>;
type ExtractParams<T extends string> =
  T extends `${string}{${infer P}}${infer Rest}`
    ? { [K in P | keyof ExtractParams<Rest>]: string | number }
    : {};

export type TranslationParams<K extends TranslationKey> =
  K extends keyof ParamMap ? ParamMap[K] : Record<string, never>;

// Key-param mapping
type ParamMap = {
  'common.hello': { name: string };
  'items.many': { count: number };
};