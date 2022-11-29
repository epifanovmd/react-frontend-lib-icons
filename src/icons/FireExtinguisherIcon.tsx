import React, { FC, memo } from 'react';
import FireExtinguisherSvg from '../svg/fire-extinguisher.svg';

export interface IFireExtinguisherIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FireExtinguisherIcon: FC<IFireExtinguisherIconProps> = memo(props => {
  return <FireExtinguisherSvg {...props} />;
});
