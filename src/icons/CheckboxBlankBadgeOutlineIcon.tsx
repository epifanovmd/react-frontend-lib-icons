import React, { FC, memo } from 'react';
import CheckboxBlankBadgeOutlineSvg from '../svg/checkbox-blank-badge-outline.svg';

export interface ICheckboxBlankBadgeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxBlankBadgeOutlineIcon: FC<ICheckboxBlankBadgeOutlineIconProps> = memo(props => {
  return <CheckboxBlankBadgeOutlineSvg {...props} />;
});
