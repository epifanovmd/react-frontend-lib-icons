import React, { FC, memo } from 'react';
import UmbrellaClosedSvg from '../svg/umbrella-closed.svg';

export interface IUmbrellaClosedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UmbrellaClosedIcon: FC<IUmbrellaClosedIconProps> = memo(props => {
  return <UmbrellaClosedSvg {...props} />;
});
