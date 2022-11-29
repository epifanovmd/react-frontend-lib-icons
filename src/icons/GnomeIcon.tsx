import React, { FC, memo } from 'react';
import GnomeSvg from '../svg/gnome.svg';

export interface IGnomeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GnomeIcon: FC<IGnomeIconProps> = memo(props => {
  return <GnomeSvg {...props} />;
});
