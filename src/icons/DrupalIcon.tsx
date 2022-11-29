import React, { FC, memo } from 'react';
import DrupalSvg from '../svg/drupal.svg';

export interface IDrupalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DrupalIcon: FC<IDrupalIconProps> = memo(props => {
  return <DrupalSvg {...props} />;
});
