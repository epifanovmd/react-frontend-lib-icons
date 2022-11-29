import React, { FC, memo } from 'react';
import OcarinaSvg from '../svg/ocarina.svg';

export interface IOcarinaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OcarinaIcon: FC<IOcarinaIconProps> = memo(props => {
  return <OcarinaSvg {...props} />;
});
