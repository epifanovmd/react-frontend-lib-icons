import React, { FC, memo } from 'react';
import DomeLightSvg from '../svg/dome-light.svg';

export interface IDomeLightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DomeLightIcon: FC<IDomeLightIconProps> = memo(props => {
  return <DomeLightSvg {...props} />;
});
