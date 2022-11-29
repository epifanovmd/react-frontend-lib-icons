import React, { FC, memo } from 'react';
import OmSvg from '../svg/om.svg';

export interface IOmIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OmIcon: FC<IOmIconProps> = memo(props => {
  return <OmSvg {...props} />;
});
