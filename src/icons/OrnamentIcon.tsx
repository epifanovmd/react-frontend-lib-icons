import React, { FC, memo } from 'react';
import OrnamentSvg from '../svg/ornament.svg';

export interface IOrnamentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OrnamentIcon: FC<IOrnamentIconProps> = memo(props => {
  return <OrnamentSvg {...props} />;
});
