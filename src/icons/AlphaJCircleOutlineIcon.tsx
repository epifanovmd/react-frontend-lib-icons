import React, { FC, memo } from 'react';
import AlphaJCircleOutlineSvg from '../svg/alpha-j-circle-outline.svg';

export interface IAlphaJCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaJCircleOutlineIcon: FC<IAlphaJCircleOutlineIconProps> = memo(props => {
  return <AlphaJCircleOutlineSvg {...props} />;
});
