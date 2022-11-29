import React, { FC, memo } from 'react';
import BulldozerSvg from '../svg/bulldozer.svg';

export interface IBulldozerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BulldozerIcon: FC<IBulldozerIconProps> = memo(props => {
  return <BulldozerSvg {...props} />;
});
