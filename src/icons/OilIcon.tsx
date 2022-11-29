import React, { FC, memo } from 'react';
import OilSvg from '../svg/oil.svg';

export interface IOilIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OilIcon: FC<IOilIconProps> = memo(props => {
  return <OilSvg {...props} />;
});
