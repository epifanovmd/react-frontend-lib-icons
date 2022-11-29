import React, { FC, memo } from 'react';
import AlienOutlineSvg from '../svg/alien-outline.svg';

export interface IAlienOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlienOutlineIcon: FC<IAlienOutlineIconProps> = memo(props => {
  return <AlienOutlineSvg {...props} />;
});
