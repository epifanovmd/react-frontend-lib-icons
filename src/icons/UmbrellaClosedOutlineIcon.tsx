import React, { FC, memo } from 'react';
import UmbrellaClosedOutlineSvg from '../svg/umbrella-closed-outline.svg';

export interface IUmbrellaClosedOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UmbrellaClosedOutlineIcon: FC<IUmbrellaClosedOutlineIconProps> = memo(props => {
  return <UmbrellaClosedOutlineSvg {...props} />;
});
