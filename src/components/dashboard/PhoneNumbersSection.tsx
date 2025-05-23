
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Phone, Plus, Edit, Trash2 } from "lucide-react";

export function PhoneNumbersSection() {
  const phoneNumbers = [
    { id: 1, number: "+1 (555) 123-4567", status: "Active", assistant: "Customer Support" },
    { id: 2, number: "+1 (555) 987-6543", status: "Inactive", assistant: "Sales Bot" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Phone Numbers</h2>
          <p className="text-muted-foreground">Manage phone numbers for your AI voice agents</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Number
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Active Phone Numbers
          </CardTitle>
          <CardDescription>
            Phone numbers assigned to your voice agents
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {phoneNumbers.map((phone) => (
              <div key={phone.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{phone.number}</p>
                    <p className="text-sm text-muted-foreground">Assigned to: {phone.assistant}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={phone.status === "Active" ? "default" : "secondary"}>
                    {phone.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
