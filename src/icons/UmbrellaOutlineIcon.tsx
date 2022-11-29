import React, { FC, memo } from 'react';
import UmbrellaOutlineSvg from '../svg/umbrella-outline.svg';

export interface IUmbrellaOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UmbrellaOutlineIcon: FC<IUmbrellaOutlineIconProps> = memo(props => {
  return <UmbrellaOutlineSvg {...props} />;
});
