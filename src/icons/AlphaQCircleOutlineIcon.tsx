import React, { FC, memo } from 'react';
import AlphaQCircleOutlineSvg from '../svg/alpha-q-circle-outline.svg';

export interface IAlphaQCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaQCircleOutlineIcon: FC<IAlphaQCircleOutlineIconProps> = memo(props => {
  return <AlphaQCircleOutlineSvg {...props} />;
});
