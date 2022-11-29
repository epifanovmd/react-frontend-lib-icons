import React, { FC, memo } from 'react';
import FootPrintSvg from '../svg/foot-print.svg';

export interface IFootPrintIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FootPrintIcon: FC<IFootPrintIconProps> = memo(props => {
  return <FootPrintSvg {...props} />;
});
