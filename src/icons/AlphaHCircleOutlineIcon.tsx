import React, { FC, memo } from 'react';
import AlphaHCircleOutlineSvg from '../svg/alpha-h-circle-outline.svg';

export interface IAlphaHCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaHCircleOutlineIcon: FC<IAlphaHCircleOutlineIconProps> = memo(props => {
  return <AlphaHCircleOutlineSvg {...props} />;
});
