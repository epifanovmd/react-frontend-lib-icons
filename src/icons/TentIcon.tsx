import React, { FC, memo } from 'react';
import TentSvg from '../svg/tent.svg';

export interface ITentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TentIcon: FC<ITentIconProps> = memo(props => {
  return <TentSvg {...props} />;
});
