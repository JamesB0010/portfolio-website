declare module '*.scss';
declare module '*.sass';
declare module '*.css';
declare module "*.png" {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const value: any;
    export default value.default;
}