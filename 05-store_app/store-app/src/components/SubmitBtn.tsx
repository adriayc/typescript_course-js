import { useNavigation } from 'react-router-dom';
import { ReloadIcon } from '@radix-ui/react-icons';
// Components (Shadcn/ui)
import { Button } from './ui/button';

function SubmitBtn({ text, className }: { text: string; className?: string }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state == 'submitting';

  return (
    <Button type="submit" className={className} disabled={isSubmitting}>
      {isSubmitting ? (
        <span className="flex">
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </span>
      ) : (
        text
      )}
    </Button>
  );
}

export default SubmitBtn;
