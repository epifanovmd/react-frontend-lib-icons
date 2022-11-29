import React, { FC, memo } from 'react';
import OdnoklassnikiSvg from '../svg/odnoklassniki.svg';

export interface IOdnoklassnikiIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OdnoklassnikiIcon: FC<IOdnoklassnikiIconProps> = memo(props => {
  return <OdnoklassnikiSvg {...props} />;
});
