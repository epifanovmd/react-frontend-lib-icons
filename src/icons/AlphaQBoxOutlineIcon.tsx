import React, { FC, memo } from 'react';
import AlphaQBoxOutlineSvg from '../svg/alpha-q-box-outline.svg';

export interface IAlphaQBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaQBoxOutlineIcon: FC<IAlphaQBoxOutlineIconProps> = memo(props => {
  return <AlphaQBoxOutlineSvg {...props} />;
});
