import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { makeClassName } from './textUtil';

type TextProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export type TitleProps = TextProps & {
  numberOfLines?: number;
};

export function Title({
  className: _className,
  numberOfLines,
  ...props
}: TitleProps) {
  const className = makeClassName(
    'font-bold text-5xl text-center whitespace-pre-line',
    _className,
    numberOfLines,
  );
  return <p {...props} className={className} />;
}

export type SubTitleProps = TitleProps & {};

export function SubTitle({
  className: _className,
  numberOfLines,
  ...props
}: SubTitleProps) {
  const className = makeClassName(
    'font-semibold text-3xl text-center whitespace-pre-line',
    _className,
    numberOfLines,
  );
  return <p {...props} className={className} />;
}

export type SummaryProps = SubTitleProps & {};

export function Summary({
  className: _className,
  numberOfLines,
  ...props
}: SummaryProps) {
  const className = makeClassName(
    'text-sm whitespace-pre-line',
    _className,
    numberOfLines,
  );
  return <p {...props} className={className} />;
}

export type ParagraphProps = SummaryProps & {
  numberOfLines?: number;
};

export function Paragraph({
  className: _className,
  numberOfLines,
  ...props
}: ParagraphProps) {
  const className = makeClassName(
    'font-normal text-base whitespace-pre-line',
    _className,
    numberOfLines,
  );
  return <p {...props} className={className} />;
}
