import React, { FC, memo } from 'react';
import AlphaESvg from '../svg/alpha-e.svg';

export interface IAlphaEIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaEIcon: FC<IAlphaEIconProps> = memo(props => {
  return <AlphaESvg {...props} />;
});
