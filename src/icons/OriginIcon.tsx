import React, { FC, memo } from 'react';
import OriginSvg from '../svg/origin.svg';

export interface IOriginIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OriginIcon: FC<IOriginIconProps> = memo(props => {
  return <OriginSvg {...props} />;
});
