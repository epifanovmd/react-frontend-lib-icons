import React, { FC, memo } from 'react';
import AlphaMBoxOutlineSvg from '../svg/alpha-m-box-outline.svg';

export interface IAlphaMBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaMBoxOutlineIcon: FC<IAlphaMBoxOutlineIconProps> = memo(props => {
  return <AlphaMBoxOutlineSvg {...props} />;
});
