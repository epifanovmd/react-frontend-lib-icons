import React, { FC, memo } from 'react';
import GlobeModelSvg from '../svg/globe-model.svg';

export interface IGlobeModelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GlobeModelIcon: FC<IGlobeModelIconProps> = memo(props => {
  return <GlobeModelSvg {...props} />;
});
