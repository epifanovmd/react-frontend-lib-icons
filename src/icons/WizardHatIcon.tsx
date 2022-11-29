import React, { FC, memo } from 'react';
import WizardHatSvg from '../svg/wizard-hat.svg';

export interface IWizardHatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WizardHatIcon: FC<IWizardHatIconProps> = memo(props => {
  return <WizardHatSvg {...props} />;
});
