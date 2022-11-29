import React, { FC, memo } from 'react';
import NewspaperVariantMultipleSvg from '../svg/newspaper-variant-multiple.svg';

export interface INewspaperVariantMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NewspaperVariantMultipleIcon: FC<INewspaperVariantMultipleIconProps> = memo(props => {
  return <NewspaperVariantMultipleSvg {...props} />;
});
