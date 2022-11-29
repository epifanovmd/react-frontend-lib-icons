import React, { FC, memo } from 'react';
import AlphaXCircleSvg from '../svg/alpha-x-circle.svg';

export interface IAlphaXCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaXCircleIcon: FC<IAlphaXCircleIconProps> = memo(props => {
  return <AlphaXCircleSvg {...props} />;
});
