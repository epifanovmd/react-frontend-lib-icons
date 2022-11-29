import React, { FC, memo } from 'react';
import DomainOffSvg from '../svg/domain-off.svg';

export interface IDomainOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DomainOffIcon: FC<IDomainOffIconProps> = memo(props => {
  return <DomainOffSvg {...props} />;
});
