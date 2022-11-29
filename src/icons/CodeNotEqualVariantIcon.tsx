import React, { FC, memo } from 'react';
import CodeNotEqualVariantSvg from '../svg/code-not-equal-variant.svg';

export interface ICodeNotEqualVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CodeNotEqualVariantIcon: FC<ICodeNotEqualVariantIconProps> = memo(props => {
  return <CodeNotEqualVariantSvg {...props} />;
});
