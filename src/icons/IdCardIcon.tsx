import React, { FC, memo } from 'react';
import IdCardSvg from '../svg/id-card.svg';

export interface IIdCardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const IdCardIcon: FC<IIdCardIconProps> = memo(props => {
  return <IdCardSvg {...props} />;
});
