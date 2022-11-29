import React, { FC, memo } from 'react';
import CheckboxBlankBadgeSvg from '../svg/checkbox-blank-badge.svg';

export interface ICheckboxBlankBadgeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxBlankBadgeIcon: FC<ICheckboxBlankBadgeIconProps> = memo(props => {
  return <CheckboxBlankBadgeSvg {...props} />;
});
