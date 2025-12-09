import {type ReactElement, useMemo} from 'react';
import KaTeX, {type KatexOptions} from "katex";

// --------------------------------------------------------------------------------------------------------------------
// helpers
// --------------------------------------------------------------------------------------------------------------------

function render(source: string, displayMode: boolean): string {
    const translatedSource = source
        .replaceAll("§cursor", "#kern -0.01em #textcolor{red}{#rule{0.02em}{0.7em}} #kern -0.01em#relax ")
        .replaceAll("#", "\\");
    const options: KatexOptions = {
        displayMode,
        throwOnError: false,
        errorColor: "red",
        output: "html",
    };
    return KaTeX.renderToString(translatedSource, options);
}

function useRendered(source: string, displayMode: boolean): string {
    return useMemo(() => render(source, displayMode), [source, displayMode]);
}

// --------------------------------------------------------------------------------------------------------------------
// base props
// --------------------------------------------------------------------------------------------------------------------

export interface MathProps {
    source: string;
    textSize?: number;
}

// --------------------------------------------------------------------------------------------------------------------
// div props and component
// --------------------------------------------------------------------------------------------------------------------

export interface MathDivProps extends MathProps {
}

export function MathDiv(props: MathDivProps) {
    const html = useRendered(props.source, true);
    const style = props.textSize ? {fontSize: props.textSize + "em"} : {};
    return <div style={style} dangerouslySetInnerHTML={{ __html: html }} />;
}

export function mathDiv(source: string, textSize?: number): ReactElement {
    return <MathDiv source={source} textSize={textSize} />;
}

// --------------------------------------------------------------------------------------------------------------------
// span props and component
// --------------------------------------------------------------------------------------------------------------------

export interface MathSpanProps extends MathProps {
}

export function MathSpan(props: MathSpanProps) {
    const html = useRendered(props.source, false);
    const style = props.textSize ? {fontSize: props.textSize + "em"} : {};
    return <span style={style} dangerouslySetInnerHTML={{ __html: html }} />;
}

export function mathSpan(source: string, textSize?: number): ReactElement {
    return <MathSpan source={source} textSize={textSize} />;
}

// --------------------------------------------------------------------------------------------------------------------
// inline-block span props and component
// --------------------------------------------------------------------------------------------------------------------

export interface MathInlineBlockProps extends MathProps {
    widthEm: number;
}

export function MathInlineBlock(props: MathInlineBlockProps) {
    const html = useRendered(props.source, true);
    const style = {
      display: "inline-block",
      width: props.widthEm + "em",
      ...props.textSize ? {fontSize: props.textSize + "em"} : {},
    };
    return <span style={style} dangerouslySetInnerHTML={{ __html: html }} />;
}

export function mathInlineBlock(source: string, widthEm: number, textSize?: number): ReactElement {
    return <MathInlineBlock source={source} widthEm={widthEm} textSize={textSize} />;
}
