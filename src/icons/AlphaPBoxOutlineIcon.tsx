import React, { FC, memo } from 'react';
import AlphaPBoxOutlineSvg from '../svg/alpha-p-box-outline.svg';

export interface IAlphaPBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaPBoxOutlineIcon: FC<IAlphaPBoxOutlineIconProps> = memo(props => {
  return <AlphaPBoxOutlineSvg {...props} />;
});
