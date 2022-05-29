interface IMarginProps {
    top?: number,
    left?: number,
    right?: number,
    bottom?: number,
    all?: number,
}

export function margin(marginProps: IMarginProps): any {
    return {
        marginTop: marginProps.all ? marginProps.all : marginProps.top,
        marginLeft: marginProps.all ? marginProps.all : marginProps.left,
        marginRight: marginProps.all ? marginProps.all : marginProps.right,
        marginBottom: marginProps.all ? marginProps.all : marginProps.bottom,
    };
}
