import React, { FC, memo } from 'react';
import PowerPlugSvg from '../svg/power-plug.svg';

export interface IPowerPlugIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PowerPlugIcon: FC<IPowerPlugIconProps> = memo(props => {
  return <PowerPlugSvg {...props} />;
});
