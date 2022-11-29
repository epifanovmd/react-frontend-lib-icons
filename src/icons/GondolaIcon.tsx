import React, { FC, memo } from 'react';
import GondolaSvg from '../svg/gondola.svg';

export interface IGondolaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GondolaIcon: FC<IGondolaIconProps> = memo(props => {
  return <GondolaSvg {...props} />;
});
