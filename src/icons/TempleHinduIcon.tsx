import React, { FC, memo } from 'react';
import TempleHinduSvg from '../svg/temple-hindu.svg';

export interface ITempleHinduIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TempleHinduIcon: FC<ITempleHinduIconProps> = memo(props => {
  return <TempleHinduSvg {...props} />;
});
