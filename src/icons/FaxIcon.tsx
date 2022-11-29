import React, { FC, memo } from 'react';
import FaxSvg from '../svg/fax.svg';

export interface IFaxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FaxIcon: FC<IFaxIconProps> = memo(props => {
  return <FaxSvg {...props} />;
});
