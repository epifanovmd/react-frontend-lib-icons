import React, { FC, memo } from 'react';
import FlagRemoveSvg from '../svg/flag-remove.svg';

export interface IFlagRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlagRemoveIcon: FC<IFlagRemoveIconProps> = memo(props => {
  return <FlagRemoveSvg {...props} />;
});
