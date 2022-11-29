import React, { FC, memo } from 'react';
import AlphaKCircleOutlineSvg from '../svg/alpha-k-circle-outline.svg';

export interface IAlphaKCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaKCircleOutlineIcon: FC<IAlphaKCircleOutlineIconProps> = memo(props => {
  return <AlphaKCircleOutlineSvg {...props} />;
});
