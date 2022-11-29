import React, { FC, memo } from 'react';
import AlphaQBoxSvg from '../svg/alpha-q-box.svg';

export interface IAlphaQBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaQBoxIcon: FC<IAlphaQBoxIconProps> = memo(props => {
  return <AlphaQBoxSvg {...props} />;
});
