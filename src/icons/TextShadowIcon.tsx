import React, { FC, memo } from 'react';
import TextShadowSvg from '../svg/text-shadow.svg';

export interface ITextShadowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextShadowIcon: FC<ITextShadowIconProps> = memo(props => {
  return <TextShadowSvg {...props} />;
});
