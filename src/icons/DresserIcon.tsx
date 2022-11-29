import React, { FC, memo } from 'react';
import DresserSvg from '../svg/dresser.svg';

export interface IDresserIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DresserIcon: FC<IDresserIconProps> = memo(props => {
  return <DresserSvg {...props} />;
});
